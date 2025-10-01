import { motion } from "framer-motion";
// import { useState, useRef, useEffect } from "react";

interface Path {
  path: string;
  color?: string;
  height: string;
  viewBox: string;
  delay: number;
}

interface Props {
  children: React.ReactNode;
  pathData: Path;
}

export default function HoverHighlight(props: Props) {
  const { children, pathData } = props;
  const { path, color, height, viewBox, delay } = pathData;

  return (
    <span className="relative inline-block">
      {children}
      {/* Animated underline */}
      <motion.svg
        className="absolute -left-1 -bottom-2 w-[102%]"
        height={height}
        viewBox={viewBox}
        preserveAspectRatio="none"
      >
        <motion.path
          d={path}
          stroke={color || "#4499FB"}
          fill="none"
          strokeWidth={4}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              pathLength: 1,
              transition: {
                pathLength: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 7,
                  delay: delay,
                },
              },
            },
            hidden: {
              pathLength: 0,
              transition: {
                pathLength: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 7,
                  delay: delay,
                },
              },
            },
          }}
        />
      </motion.svg>
    </span>
  );
}
