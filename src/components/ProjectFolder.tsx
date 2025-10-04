import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  color: string;
  tabPosition: string;
  children: React.ReactNode;
}

export default function ProjectFolder(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { title, color, tabPosition, children } = props;

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
    >
      <div
        className={`relative pt-10 transition-all duration-300 ${
          !isOpen ? "group-hover:-translate-y-2" : ""
        }`}
      >
        {/* The Tab */}
        <div
          className={`cursor-pointer absolute top-0 left-10 ${tabPosition} flex items-center  pointer-events-auto`}
        >
          <div
            className={`flex items-center px-4 rounded-sm rounded-tr-none  ${backgroundColor} `}
          >
            <h3 className="chivo p-3">{title}</h3>
          </div>
          <div className="relative w-12 h-12 overflow-hidden">
            <div
              className={`absolute w-18 h-18 ${backgroundColor} rounded-xl rotate-45 -translate-x-[36px] translate-y-[10px] `}
            ></div>
          </div>
        </div>

        {/* The Main Body */}
        <div
          className={`pt-13 px-10 lg:px-30 pb-15 rounded-t-md ${backgroundColor} pointer-events-auto`}
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
