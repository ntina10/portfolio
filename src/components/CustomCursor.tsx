import { motion } from "framer-motion";

const CustomCursor = ({
  isHovering,
  isClicked,
  isOpen,
}: {
  isHovering: boolean;
  isClicked: boolean;
  isOpen: boolean;
}) => {
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
    >
      <span className="text-white text-md font-bold ovo">
        {isOpen ? "Close" : "Peek!"}
      </span>
    </motion.div>
  );
};

export default CustomCursor;
