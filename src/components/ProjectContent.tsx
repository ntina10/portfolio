import { FaExternalLinkAlt } from "react-icons/fa";
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
        ? `flex-1 max-h-110 rounded-lg`
        : "max-h-115 rounded-lg shrink-0"; // Vertical orientation
    case "desktop":
      return "max-h-100 rounded-lg shrink-0"; // Horizontal orientation
    case "square":
      return totalImages === 2
        ? "flex-1 h-auto max-h-110 rounded-lg object-cover"
        : "w-110 h-110 rounded-lg object-cover shrink-0";
    default:
      return "max-h-100 rounded-lg shrink-0";
  }
};

const ImagesContainer = ({
  images,
  galleryId,
}: {
  images: ProjectImage[];
  galleryId: string;
}) => {
  const shouldWrap =
    (images[0]?.type === "square" && images.length === 2) ||
    (images[0]?.type === "mobile" && images.length === 3);

  // LightboxGallery will render anchors + imgs and initialize PhotoSwipe
  return (
    <div
      className={`flex pt-4 gap-4 no-scrollbar ${
        shouldWrap ? "flex-wrap justify-center" : "overflow-x-auto flex-nowrap"
      }`}
    >
      <LightboxGallery
        galleryID={galleryId}
        images={images.map((img) => ({
          src: img.src,
          caption: img.caption,
          type: img.type,
        }))}
        getImageClassName={(type, total) =>
          getImageClassName(type || "", total)
        }
      />
    </div>
  );
};

export default function ProjectContent(props: Props) {
  const { project } = props;
  const { id, technologies, description, content } = project;

  console.log(id);

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
