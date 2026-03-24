import { motion } from "framer-motion";
import type { RefObject } from "react";

interface CustomCursorProps {
  isHovering: boolean;
  isClicked: boolean;
  isOpen: boolean;
  isDesktop: boolean;
  onMobileClick: () => void;
  cursorRef: RefObject<HTMLDivElement | null>;
}

const CustomCursor = ({
  isHovering,
  isClicked,
  isOpen,
  isDesktop,
  onMobileClick,
  cursorRef,
}: CustomCursorProps) => {
  if (!isDesktop) {
    return (
      <motion.button
        // Use 'pointer-events-auto' so it can be clicked
        className="absolute -top-6 right-2 w-12 h-12 bg-black rounded-full flex items-center justify-center z-50 pointer-events-auto shadow-md"
        onClick={(e) => {
          e.stopPropagation(); // Prevent double-firing if parent also has onClick
          onMobileClick();
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <span className="text-white text-sm font-bold ovo">
          {isOpen ? "Close" : "Peek!"}
        </span>
      </motion.button>
    );
  }

  return (
    <div
      ref={cursorRef}
      className="more-about-cursor fixed left-0 top-0 pointer-events-none z-50"
      data-visible={isHovering}
      data-clicked={isClicked}
      aria-hidden="true"
    >
      <div className="more-about-cursor-bubble flex h-12 w-12 items-center justify-center rounded-full bg-black">
        <span className="text-white text-md font-bold ovo">
          {isOpen ? "Close" : "Peek!"}
        </span>
      </div>
    </div>
  );
};

export default CustomCursor;
