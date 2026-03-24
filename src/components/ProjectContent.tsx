import { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import LightboxGallery from "./LightboxGallery";

type ImageType = "desktop" | "mobile" | "square";

interface ProjectImage {
  src: string;
  type: ImageType | string;
  caption?: string;
}

interface Section {
  paragraph?: string;
  title?: string;
  images?: ProjectImage[];
  imageButton?: Record<string, string>;
}

interface Project {
  id: string;
  technologies: string[];
  projectTitle: string;
  description: string;
  content: Section[];
}

interface Props {
  project: Project;
}

const getImageClassName = (type: ImageType | string, totalImages: number) => {
  switch (type) {
    case "mobile":
      return totalImages <= 3
        ? "w-[28vw] max-w-[7rem] rounded-lg md:block md:h-auto md:w-auto md:max-w-full md:max-h-96"
        : "w-[38vw] max-h-[18rem] rounded-lg shrink-0 md:w-auto md:max-h-115"; // Vertical orientation
    case "desktop":
      return "w-[min(calc(100vw-6rem),32rem)] max-h-[12rem] rounded-lg object-contain shrink-0 md:w-auto md:max-h-100"; // Horizontal orientation
    case "square":
      return totalImages === 2
        ? "aspect-square w-full max-w-[12rem] self-center rounded-lg object-cover md:block md:aspect-auto md:h-auto md:w-full md:max-w-none md:self-auto md:max-h-96 md:object-contain"
        : "h-[70vw] w-[70vw] max-h-[18rem] max-w-[18rem] rounded-lg object-cover shrink-0 md:h-110 md:w-110";
    default:
      return "w-[min(calc(100vw-6rem),32rem)] max-h-[12rem] rounded-lg object-contain shrink-0 md:w-auto md:max-h-100";
  }
};

const getItemClassName = (type: ImageType | string) => {
  switch (type) {
    case "mobile":
      return "flex-shrink-0";
    case "square":
      return "flex-shrink-0";
    default:
      return "flex-shrink-0";
  }
};

const ImagesContainer = ({
  images,
  galleryId,
}: {
  images: ProjectImage[];
  galleryId: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const shouldWrap =
    (images[0]?.type === "square" && images.length === 2) ||
    (images[0]?.type === "mobile" && images.length === 3);

  useEffect(() => {
    if (shouldWrap) {
      setIsScrollable(false);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const scrollContainer = scrollRef.current;

    if (!scrollContainer) {
      return;
    }

    const updateScrollState = () => {
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const hasHorizontalOverflow = maxScrollLeft > 8;

      setIsScrollable(hasHorizontalOverflow);
      setCanScrollLeft(scrollContainer.scrollLeft > 8);
      setCanScrollRight(scrollContainer.scrollLeft < maxScrollLeft - 8);
    };

    updateScrollState();

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(scrollContainer);

    const imagesInGallery = Array.from(scrollContainer.querySelectorAll("img"));

    imagesInGallery.forEach((image) => {
      image.addEventListener("load", updateScrollState);
      image.addEventListener("error", updateScrollState);
    });

    scrollContainer.addEventListener("scroll", updateScrollState, {
      passive: true,
    });
    window.addEventListener("resize", updateScrollState);

    return () => {
      resizeObserver.disconnect();
      imagesInGallery.forEach((image) => {
        image.removeEventListener("load", updateScrollState);
        image.removeEventListener("error", updateScrollState);
      });
      scrollContainer.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [images, shouldWrap]);

  const scrollGallery = (direction: "left" | "right") => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) {
      return;
    }

    const galleryImages = Array.from(
      scrollContainer.querySelectorAll<HTMLAnchorElement>("a"),
    );

    if (galleryImages.length === 0) {
      return;
    }

    const baseOffset = galleryImages[0].offsetLeft;
    const imagePositions = galleryImages.map((image) =>
      Math.max(image.offsetLeft - baseOffset, 0),
    );
    const maxScrollLeft =
      scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const currentScrollLeft = scrollContainer.scrollLeft;
    const closestImageIndex = imagePositions.reduce(
      (closestIndex, position, index) => {
        const currentDistance = Math.abs(position - currentScrollLeft);
        const closestDistance = Math.abs(
          imagePositions[closestIndex] - currentScrollLeft,
        );

        return currentDistance < closestDistance ? index : closestIndex;
      },
      0,
    );

    const targetIndex =
      direction === "left"
        ? Math.max(closestImageIndex - 1, 0)
        : Math.min(closestImageIndex + 1, galleryImages.length - 1);

    scrollContainer.scrollTo({
      left: Math.min(Math.max(imagePositions[targetIndex], 0), maxScrollLeft),
      behavior: "smooth",
    });
  };

  const arrowButtonClass =
    "pointer-events-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-stone-200/80 bg-[#faf6f0]/95 text-stone-700 backdrop-blur-md transition duration-200 enabled:hover:-translate-y-0.5 enabled:hover:border-stone-500 enabled:hover:bg-[#fffaf2] enabled:hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-35";

  return (
    <div className="pt-4">
      <div className="relative md:px-6">
        {!shouldWrap && isScrollable && (
          <div className="mb-3 flex justify-end gap-2 md:hidden">
            <button
              type="button"
              onClick={() => scrollGallery("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll project images left"
              className={arrowButtonClass}
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollGallery("right")}
              disabled={!canScrollRight}
              aria-label="Scroll project images right"
              className={arrowButtonClass}
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        <div
          ref={scrollRef}
          className={`no-scrollbar ${shouldWrap ? "" : "overflow-x-auto"}`}
        >
          <LightboxGallery
            galleryID={galleryId}
            images={images.map((img) => ({
              src: img.src,
              caption: img.caption,
              type: img.type,
            }))}
            galleryClassName={
              shouldWrap
                ? "flex-wrap justify-center"
                : "w-max flex-nowrap"
            }
            getItemClassName={(type) => getItemClassName(type || "")}
            getImageClassName={(type, total) =>
              getImageClassName(type || "", total)
            }
          />
        </div>

        {!shouldWrap && isScrollable && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-6 z-10 hidden -translate-x-1/2 items-center md:flex">
              <button
                type="button"
                onClick={() => scrollGallery("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll project images left"
                className={arrowButtonClass}
              >
                <FaChevronLeft />
              </button>
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-6 z-10 hidden translate-x-1/2 items-center md:flex">
              <button
                type="button"
                onClick={() => scrollGallery("right")}
                disabled={!canScrollRight}
                aria-label="Scroll project images right"
                className={arrowButtonClass}
              >
                <FaChevronRight />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default function ProjectContent(props: Props) {
  const { project } = props;
  const { id, technologies, description, content } = project;

  return (
    <div className="ovo flex flex-col gap-8 w-full pb-4">
      <p>{description}</p>
      <p className="chivo">Technologies: {technologies.join(", ")}</p>

      {content.length > 0 &&
        content.map((section, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              {section.title && <h3 className="chivo">{section.title}</h3>}
              {section.paragraph && <p>{section.paragraph}</p>}
              {section.images && (
                <ImagesContainer
                  images={section.images}
                  galleryId={`${id}-${index}`}
                />
              )}
              {section.imageButton && (
                <div className="rounded-lg overflow-hidden">
                  <a
                    href={section.imageButton.link}
                    className="relative group/img"
                    target="_blank "
                  >
                    <FaExternalLinkAlt className="absolute right-2 top-2 opacity-0 group-hover/img:opacity-100"></FaExternalLinkAlt>
                    <img src={section.imageButton.image}></img>
                  </a>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
