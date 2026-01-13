import { useEffect } from "react";
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
}: {
  galleryID: string;
  images: GalleryImage[];
  getImageClassName?: (type: string | undefined, total: number) => string;
}) {
  useEffect(() => {
    // ensure anchors have width/height for photoswipe; preload if missing
    const anchors = Array.from(
      document.querySelectorAll(`#${galleryID} a`)
    ) as HTMLAnchorElement[];

    const loaders: HTMLImageElement[] = [];

    anchors.forEach((a) => {
      const widthAttr = a.getAttribute("data-pswp-width");
      const heightAttr = a.getAttribute("data-pswp-height");
      if (!widthAttr || !heightAttr) {
        const img = new Image();
        loaders.push(img);
        img.src = a.href;
        img.onload = () => {
          a.setAttribute("data-pswp-width", String(img.naturalWidth));
          a.setAttribute("data-pswp-height", String(img.naturalHeight));
        };
      }
    });

    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      // clear any remaining loaders
      loaders.forEach((l) => {
        l.onload = null;
      });
      lightbox = null as any;
    };
    // galleryID and images are stable per gallery render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pswp-gallery flex gap-4" id={galleryID}>
      {images.map((image, index) => (
        <a
          href={image.src}
          key={`${galleryID}-${index}`}
          target="_blank"
          rel="noreferrer"
          aria-label={image.caption || `image-${index}`}
          className="flex-shrink-0"
        >
          <img
            src={image.src}
            alt={image.caption || ""}
            className={getImageClassName?.(image.type, images.length) || ""}
          />
        </a>
      ))}
    </div>
  );
}
