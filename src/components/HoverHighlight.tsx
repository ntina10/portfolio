import { motion } from "framer-motion";
import { useState } from "react";

interface Path {
  path: string;
  color?: string;
  height: string;
  viewBox: string;
}

interface Props {
  children: React.ReactNode;
  pathData: Path;
}

export default function HoverHighlight(props: Props) {
  const { children, pathData } = props;
  const { path, color, height, viewBox } = pathData;

  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {/* Animated underline */}
      <motion.svg
        className="absolute left-0 -bottom-2 w-full"
        height={height}
        viewBox={viewBox}
        preserveAspectRatio="none"
      >
        <motion.path
          d={path}
          stroke={color || "#4499FB"}
          fill="none"
          strokeWidth={4}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: hovered ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.svg>
    </span>
  );
}
