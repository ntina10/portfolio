import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  color: string;
  textColor: string;
  tabPosition: string;
  children: React.ReactNode;
  // isOpen: boolean;
  // onToggle: () => void;
}

export default function ProjectFolder(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { title, color, textColor, tabPosition, children } = props;

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

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="group pointer-events-none"
    >
      <div className="relative pt-10 transition-transform duration-300 group-hover:-translate-y-2">
        {/* The Tab */}
        <div
          className={`cursor-pointer absolute top-0 ${tabPosition} flex items-center  pointer-events-auto`}
        >
          <div
            className={`flex items-center px-4 rounded-t-sm rounded-tr-none ${color} `}
          >
            <h3 className="p-3">{title}</h3>
          </div>
          <div className="flex items-center">
            <svg
              width="30"
              height="48"
              viewBox="0 0 30 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 0.5C1.56112 0.168629 0 0 0 0V50.5H38.5C38.5 50.5 36.9064 50.412 36 50C35.3591 49.7087 35.0391 49.4528 34.5 49C34.3333 48.86 33.7106 48.2106 33.5 48L32.5 47L5.5 2.5C5.5 2.5 4.93595 1.83907 4.5 1.5C3.81071 0.963883 3.32346 0.790632 2.5 0.5Z"
                fill={textColor}
              />
            </svg>
          </div>
        </div>

        {/* The Main Body */}
        <div
          className={`pt-13 px-10 lg:px-30 pb-15 rounded-t-md ${color} pointer-events-auto`}
        >
          {/* Expandable Content Area */}
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
