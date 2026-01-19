import { motion } from "framer-motion";
interface CustomCursorProps {
  isHovering: boolean;
  isClicked: boolean;
  isOpen: boolean;
  isDesktop: boolean;
  onMobileClick: () => void;
}

const CustomCursor = ({
  isHovering,
  isClicked,
  isOpen,
  isDesktop,
  onMobileClick,
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
    <motion.div
      className="fixed w-12 h-12 bg-black rounded-full flex items-center justify-center pointer-events-none z-50"
      animate={{
        scale: isHovering ? (isClicked ? 1.2 : 1) : 0,
      }}
      transition={{ duration: 0.2, delay: isClicked ? 0 : 0 }}
      style={{
        left: "var(--cursor-x)",
        top: "var(--cursor-y)",
        x: "-50%",
        y: "-50%",
        cursor: "none",
      }}
      aria-hidden="true"
    >
      <span className="text-white text-md font-bold ovo">
        {isOpen ? "Close" : "Peek!"}
      </span>
    </motion.div>
  );
};

export default CustomCursor;
