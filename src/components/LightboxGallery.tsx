import { useEffect, type SyntheticEvent } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

type GalleryImage = {
  src: string;
  caption?: string;
  type?: string;
  width?: number;
  height?: number;
};

export default function LightboxGallery({
  galleryID,
  images,
  getImageClassName,
  galleryClassName,
  getItemClassName,
}: {
  galleryID: string;
  images: GalleryImage[];
  getImageClassName?: (type: string | undefined, total: number) => string;
  galleryClassName?: string;
  getItemClassName?: (type: string | undefined, total: number) => string;
}) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
    // galleryID and images are stable per gallery render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const syncAnchorDimensions = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    const anchor = image.closest("a");

    if (!anchor) {
      return;
    }

    anchor.setAttribute("data-pswp-width", String(image.naturalWidth));
    anchor.setAttribute("data-pswp-height", String(image.naturalHeight));
  };

  return (
    <div
      className={`pswp-gallery flex gap-4 ${galleryClassName || ""}`}
      id={galleryID}
    >
      {images.map((image, index) => (
        <a
          href={image.src}
          key={`${galleryID}-${index}`}
          target="_blank"
          rel="noreferrer"
          aria-label={image.caption || `image-${index}`}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          className={getItemClassName?.(image.type, images.length) || "flex-shrink-0"}
        >
          <img
            src={image.src}
            alt={image.caption || ""}
            loading="lazy"
            decoding="async"
            onLoad={syncAnchorDimensions}
            className={getImageClassName?.(image.type, images.length) || ""}
          />
        </a>
      ))}
    </div>
  );
}
