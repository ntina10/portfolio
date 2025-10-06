import { FaExternalLinkAlt } from "react-icons/fa";

const ImagesGallery = (images: string[], projectTitle: string) => {
  return (
    <div className="flex overflow-x-auto pτ-4 gap-4 no-scrollbar">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`${projectTitle} image ${index + 1}`}
          className="max-h-100 rounded-lg shrink-0"
        />
      ))}
    </div>
  );
};

interface Section {
  paragraph?: string;
  title?: string;
  images?: string[];
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
          console.log(typeof section);
          console.log(section);
          return (
            <div key={index} className="flex flex-col gap-4">
              {section.title && <h3 className="chivo">{section.title}</h3>}
              {section.paragraph && <p>{section.paragraph}</p>}
              {section.images && ImagesGallery(section.images, projectTitle)}
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
