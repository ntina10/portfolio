import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  tags: string[];
  color: string;
  tabPosition: string;
  children: React.ReactNode;
}

type SpecsTagProps = {
  name: string;
  index: number;
  shouldShow: boolean;
};

const SpecsTag = ({ name, index, shouldShow }: SpecsTagProps) => (
  <motion.div
    className="ovo rounded-full inline-block border border-stone-400 bg-[#faf6f0] px-4 py-1"
    animate={
      shouldShow
        ? {
            opacity: 1,
          }
        : {
            opacity: 0,
          }
    }
    transition={{
      delay: index * 0.1,
      duration: 0.4,
      ease: "easeOut",
    }}
  >
    {name}
  </motion.div>
);

export default function ProjectFolder(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const { title, tags, color, tabPosition, children } = props;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const backgroundColor = color;

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="group pointer-events-none"
      onMouseEnter={() => isDesktop && setIsHovering(true)}
      onMouseLeave={() => isDesktop && setIsHovering(false)}
    >
      <div
        className={`relative pt-10 overflow-hidden transition-all duration-300 ${
          !isOpen ? "group-hover:-translate-y-4" : ""
        }`}
      >
        {/* The Tab */}
        <div
          className={`cursor-pointer absolute top-0 left-10 ${tabPosition} flex items-center  pointer-events-auto`}
        >
          <div
            className={`flex items-center px-4 rounded-sm rounded-tr-none  ${backgroundColor} `}
          >
            <h3 className="chivo p-3 truncate">{title}</h3>
          </div>
          <div className="relative w-12 h-12 overflow-hidden">
            <div
              className={`absolute w-18 h-18 ${backgroundColor} rounded-xl rotate-45 -translate-x-[36px] translate-y-[10px] `}
            ></div>
          </div>
        </div>

        <div className="absolute top-14 right-0 -z-5 flex justify-end gap-3 pr-3 z-10">
          {tags.map((tag, index) => (
            <SpecsTag
              key={tag}
              name={tag}
              index={index}
              // On Mobile: isHovering is always false, so it relies purely on 'isOpen'
              // On Desktop: it relies on either hovering OR being open
              shouldShow={isHovering || isOpen}
            />
          ))}
        </div>

        {/* The Main Body */}
        <div
          className={`pt-15 px-5 md:px-10 lg:px-30 pb-20 rounded-t-md ${backgroundColor} pointer-events-auto`}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                className="overflow-hidden"
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
