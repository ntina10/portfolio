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

  // const [hovered, setHovered] = useState(false);
  // const timerRef = useRef<number | null>(null);

  // const handleMouseEnter = () => {
  //   // If there's a pending timer to set hovered to false, clear it
  //   if (timerRef.current) {
  //     clearTimeout(timerRef.current);
  //     timerRef.current = null;
  //   }
  //   setHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   timerRef.current = window.setTimeout(() => {
  //     setHovered(false);
  //   }, 3000);
  // };

  // useEffect(() => {
  //   return () => {
  //     if (timerRef.current) {
  //       clearTimeout(timerRef.current);
  //     }
  //   };
  // }, []);

  return (
    <span
      className="relative inline-block"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
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
                  repeatDelay: 4,
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
                  repeatDelay: 4,

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
