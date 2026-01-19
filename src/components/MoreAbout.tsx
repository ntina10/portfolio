import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import CustomCursor from "./CustomCursor";

const CardText = ({ text }: { text: string }) => {
  return (
    <div className="ovo card rounded-lg bg-white h-[240px] w-[180px] px-10 text-2xl flex items-center justify-center">
      <p>{text}</p>
    </div>
  );
};

const CardImage = ({ image }: { image: string }) => {
  return (
    <div className="card h-[240px] w-[180px] flex items-center justify-center shrink-0">
      <img
        className="w-full h-full rounded-lg object-cover"
        src={image}
        alt="amigurumi"
      />
    </div>
  );
};

export default function MoreAbout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false); // New state to track device type

  // Check if device supports hover on mount
  useEffect(() => {
    // media query: (hover: hover) matches devices with a mouse/trackpad
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    // Optional: Update if the user attaches a mouse to a tablet dynamically
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Logic guard: Don't update CSS variables on mobile
    if (!isDesktop) return;

    (document.documentElement as any).style.setProperty(
      "--cursor-x",
      `${e.clientX}px`
    );
    (document.documentElement as any).style.setProperty(
      "--cursor-y",
      `${e.clientY}px`
    );
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsClicked(false);
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
    setIsOpen(!isOpen);
  };

  const cardMarqueeVariants: Variants = {
    animate: {
      x: [-2250, 0], // Keyframes
      transition: {
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      },
    },
  };

  const marqueeText = Array(8).fill("Wanna know more about me?");

  return (
    <section id="more-about" className="more-about mt-20 bg-[#f2ece1] relative">
      <CustomCursor
        isHovering={isHovering}
        isClicked={isClicked}
        isOpen={isOpen}
        isDesktop={isDesktop}
        onMobileClick={handleClick}
      />
      <div
        className="w-full overflow-hidden cursor-none py-4"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="text-marquee chivo text-lg py-2 no-scrollbar">
          <div className="group">
            {marqueeText.map((text, index) => (
              <h2 key={index}>{text}</h2>
            ))}
          </div>
          <div aria-hidden className="group">
            {marqueeText.map((text, index) => (
              <h2 key={index}>{text}</h2>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="content py-3 w-full overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div
              className="flex gap-8 pb-10"
              variants={cardMarqueeVariants}
              animate="animate"
            >
              <CardText text="I love making animals out of yarn" />
              <CardImage image="/hobbies/seagull.jpg" />
              <CardImage image="/hobbies/bear.jpg" />
              <CardImage image="/hobbies/bunny.jpg" />
              <CardText text="I love making animals out of yarn" />
              <CardImage image="/hobbies/crab.jpg" />
              <CardImage image="/hobbies/dog.jpg" />
              {/* <CardImage image="/hobbies/ladybug.jpg" /> */}
              <CardText text="I love making animals out of yarn" />
              <CardImage image="/hobbies/duck.jpg" />
              <CardImage image="/hobbies/tucan.jpg" />
              <CardImage image="/hobbies/fox.jpg" />
              <CardText text="I love making animals out of yarn" />
              <CardImage image="/hobbies/seagull.jpg" />
              <CardImage image="/hobbies/bear.jpg" />
              <CardImage image="/hobbies/bunny.jpg" />
              <CardText text="I love making animals out of yarn" />
              <CardImage image="/hobbies/crab.jpg" />
              <CardImage image="/hobbies/dog.jpg" />
              {/* <CardImage image="/hobbies/ladybug.jpg" /> */}
              <CardText text="I love making animals out of yarn" />
              <CardImage image="/hobbies/duck.jpg" />
              <CardImage image="/hobbies/tucan.jpg" />
              <CardImage image="/hobbies/fox.jpg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
