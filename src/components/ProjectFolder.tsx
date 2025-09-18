import { div } from "framer-motion/client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  color: string;
  children: React.ReactNode;
}

export default function ProjectFolder(props: Props) {
  const { title, color, children } = props;

  const [isOpen, setIsOpen] = useState(false);

  const contentVariants = {
    hidden: { opacity: 0, height: 0, y: -20 },
    visible: { opacity: 1, height: "auto", y: 0 },
  };

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer group">
      <div className="relative pt-10 transition-transform duration-300 group-hover:-translate-y-2">
        {/* The Tab */}
        <div
          className={`absolute top-0 left-10 flex items-center px-4 rounded-t-md ${color}`}
        >
          <h3 className="p-3">{title}</h3>
        </div>

        {/* The Main Body */}
        <div className={`p-10 pb-15 rounded-t-md shadow-lg ${color}`}>
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
