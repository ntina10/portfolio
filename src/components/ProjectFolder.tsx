import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  color: string;
  tabPosition: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ProjectFolder(props: Props) {
  const { title, color, tabPosition, children, isOpen, onToggle } = props;

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

  const folderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && folderRef.current) {
      setTimeout(() => {
        folderRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 350);
    }
  }, [isOpen]);

  const handleClick = () => {
    if (!isOpen) {
      // First trigger the close animation of other folders
      onToggle();

      // Then scroll after the exit animation completes
      setTimeout(() => {
        if (folderRef.current) {
          const rect = folderRef.current.getBoundingClientRect();
          const absoluteTop = window.pageYOffset + rect.top;
          window.scrollTo({
            top: absoluteTop - 20,
            behavior: "smooth",
          });
        }
      }, 300); // Match the exit animation duration
    } else {
      onToggle();
    }
  };

  return (
    <div onClick={onToggle} className="group pointer-events-none">
      <div className="relative pt-10 transition-transform duration-300 group-hover:-translate-y-2">
        {/* The Tab */}
        <div
          ref={folderRef}
          className={`cursor-pointer absolute top-0 ${tabPosition} flex items-center px-4 rounded-t-md ${color} pointer-events-auto`}
        >
          <h3 className="p-3">{title}</h3>
        </div>

        {/* The Main Body */}
        <div
          className={`pt-10 px-30 pb-15 rounded-t-md shadow-lg ${color} pointer-events-auto`}
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
