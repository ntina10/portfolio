import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import type { MouseEvent } from "react";

const ImagesGallery = (images: string[], projectTitle: string) => {
  return (
    <div className="flex overflow-x-auto pt-4 gap-4 no-scrollbar">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`${projectTitle} image ${index + 1}`}
          className={
            images.length === 2
              ? "w-[calc((100%-2rem)/2)] rounded-lg"
              : images.length === 3
              ? "w-[calc((100%-2rem)/3)] rounded-lg"
              : "max-h-100 rounded-lg shrink-0"
          }
        />
      ))}
    </div>
  );
};

const ImagesSwap = (images: string[]) => {
  return (
    <div className="flex overflow-x-auto pt-4 gap-4 no-scrollbar">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`my image ${index + 1}`}
          className={"max-h-100 rounded-lg shrink-0"}
        />
      ))}
    </div>
  );
  // const [imageStack, setImageStack] = useState(images);
  // const [isHovering, setIsHovering] = useState(false);
  // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // const handleClick = () => {
  //   setImageStack((prevStack) => {
  //     const newStack = [...prevStack];
  //     const first = newStack.shift();
  //     if (first) {
  //       newStack.push(first);
  //     }
  //     return newStack;
  //   });
  // };

  // const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
  //   setCursorPos({ x: e.clientX, y: e.clientY });
  // };

  // return (
  //   <div
  //     className="relative w-full h-96"
  //     onMouseEnter={() => setIsHovering(true)}
  //     onMouseLeave={() => setIsHovering(false)}
  //     onMouseMove={handleMouseMove}
  //     onClick={handleClick}
  //     style={{ cursor: isHovering ? "none" : "auto" }}
  //   >
  //     <div
  //       className={`fixed z-50 flex items-center justify-center w-32 h-32 rounded-full bg-gray-900 bg-opacity-80 text-white text-sm pointer-events-none text-center p-2 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
  //       style={{
  //         transform: `translate(${cursorPos.x - 64}px, ${
  //           cursorPos.y - 64
  //         }px)`,
  //         top: 0,
  //         left: 0,
  //       }}
  //     >
  //       Click for more
  //     </div>
  //     {imageStack
  //       .map((src, index) => {
  //         return (
  //           <div
  //             key={src}
  //             className="absolute w-full h-full transition-all duration-500 ease-in-out rounded-lg overflow-hidden"
  //             style={{
  //               transform: `rotate(${index * -2}deg) translate(${
  //                 index * -10
  //               }px, 0)`,
  //               zIndex: imageStack.length - index,
  //               transformOrigin: "bottom center",
  //             }}
  //           >
  //             <img
  //               src={src}
  //               alt={`my image ${index + 1}`}
  //               className={`w-full h-full object-contain`}
  //             />
  //           </div>
  //         );
  //       })
  //       .reverse()}
  //   </div>
  // );
};

interface Section {
  paragraph?: string;
  title?: string;
  images?: string[];
  deskImages?: string[];
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
              {section.deskImages && ImagesSwap(section.deskImages)}
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
