import { FaExternalLinkAlt } from "react-icons/fa";

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
        ? `w-[calc((100%-2rem)/${totalImages})] rounded-lg`
        : "max-h-115 rounded-lg shrink-0"; // Vertical orientation
    case "desktop":
      return "max-h-100 rounded-lg shrink-0"; // Horizontal orientation
    case "square":
      return "w-110 h-110 rounded-lg object-cover shrink-0";
    default:
      return "max-h-100 rounded-lg shrink-0";
  }
};

const ImagesContainer = ({
  images,
  projectTitle,
}: {
  images: ProjectImage[];
  projectTitle: string;
}) => {
  return (
    <div className="flex overflow-x-auto pt-4 gap-4 no-scrollbar">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.caption || `${projectTitle} image ${index + 1}`}
          className={getImageClassName(image.type, images.length)}
          role="button"
          tabIndex={0}
        />
      ))}
    </div>
  );
};

export default function ProjectContent(props: Props) {
  const { project } = props;
  const { id, technologies, projectTitle, description, content } = project;

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
                  projectTitle={projectTitle}
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
