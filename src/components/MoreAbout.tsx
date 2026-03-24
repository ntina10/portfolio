import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CustomCursor from "./CustomCursor";

const HOBBY_IMAGES = [
  "/hobbies/seagull.webp",
  "/hobbies/bear.webp",
  "/hobbies/bunny.webp",
  "/hobbies/crab.webp",
  "/hobbies/dog.webp",
  "/hobbies/duck.webp",
  "/hobbies/tucan.webp",
  "/hobbies/fox.webp",
] as const;

const CARD_CONTENT = [
  { kind: "text", value: "I love making animals out of yarn" },
  { kind: "image", value: "/hobbies/seagull.webp" },
  { kind: "image", value: "/hobbies/bear.webp" },
  { kind: "image", value: "/hobbies/bunny.webp" },
  { kind: "text", value: "I love making animals out of yarn" },
  { kind: "image", value: "/hobbies/crab.webp" },
  { kind: "image", value: "/hobbies/dog.webp" },
  { kind: "text", value: "I love making animals out of yarn" },
  { kind: "image", value: "/hobbies/duck.webp" },
  { kind: "image", value: "/hobbies/tucan.webp" },
  { kind: "image", value: "/hobbies/fox.webp" },
] as const;

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
        width="187"
        height="250"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default function MoreAbout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(
    typeof document === "undefined" ? true : !document.hidden
  );
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointerPositionRef = useRef({ x: 0, y: 0 });
  const cursorFrameRef = useRef<number | null>(null);
  const clickTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    let idleCallbackId: number | null = null;
    let timeoutId: number | null = null;
    const preloadedImages: HTMLImageElement[] = [];

    const preloadImages = () => {
      HOBBY_IMAGES.forEach((src) => {
        const image = new Image();
        image.decoding = "async";
        image.src = src;
        preloadedImages.push(image);

        if (typeof image.decode === "function") {
          image.decode().catch(() => {
            return;
          });
        }
      });
    };

    const requestIdleCallback = window.requestIdleCallback?.bind(window);
    const cancelIdleCallback = window.cancelIdleCallback?.bind(window);

    if (requestIdleCallback) {
      idleCallbackId = requestIdleCallback(preloadImages, {
        timeout: 1200,
      });
    } else {
      timeoutId = globalThis.setTimeout(preloadImages, 250);
    }

    return () => {
      if (idleCallbackId !== null && cancelIdleCallback) {
        cancelIdleCallback(idleCallbackId);
      }

      if (timeoutId !== null) {
        globalThis.clearTimeout(timeoutId);
      }

      preloadedImages.forEach((image) => {
        image.src = "";
      });
    };
  }, []);

  useEffect(() => {
    return () => {
      if (cursorFrameRef.current !== null) {
        window.cancelAnimationFrame(cursorFrameRef.current);
      }

      if (clickTimeoutRef.current !== null) {
        globalThis.clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const flushCursorPosition = () => {
    cursorFrameRef.current = null;

    if (!cursorRef.current) {
      return;
    }

    const { x, y } = pointerPositionRef.current;
    cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) {
      return;
    }

    pointerPositionRef.current = { x: e.clientX, y: e.clientY };

    if (cursorFrameRef.current === null) {
      cursorFrameRef.current = window.requestAnimationFrame(flushCursorPosition);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    pointerPositionRef.current = { x: e.clientX, y: e.clientY };
    flushCursorPosition();
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsClicked(false);

    if (cursorFrameRef.current !== null) {
      window.cancelAnimationFrame(cursorFrameRef.current);
      cursorFrameRef.current = null;
    }
  };

  const handleClick = () => {
    setIsClicked(true);

    if (clickTimeoutRef.current !== null) {
      globalThis.clearTimeout(clickTimeoutRef.current);
    }

    clickTimeoutRef.current = globalThis.setTimeout(() => setIsClicked(false), 150);
    setIsOpen((previous) => !previous);
  };

  const marqueeText = Array(8).fill("Wanna know more about me?");
  const marqueeRunning = isPageVisible && isOpen;

  return (
    <section id="more-about" className="more-about mt-20 bg-[#f2ece1] relative">
      <CustomCursor
        isHovering={isHovering}
        isClicked={isClicked}
        isOpen={isOpen}
        isDesktop={isDesktop}
        onMobileClick={handleClick}
        cursorRef={cursorRef}
      />
      <div
        className="w-full overflow-hidden cursor-none py-4"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          className="text-marquee chivo text-lg py-2 no-scrollbar"
          data-running={isPageVisible}
        >
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
            <div
              className="more-about-cards-track flex gap-8 pb-10"
              data-running={marqueeRunning}
            >
              {[...CARD_CONTENT, ...CARD_CONTENT].map((item, index) =>
                item.kind === "text" ? (
                  <CardText key={`text-${index}`} text={item.value} />
                ) : (
                  <CardImage key={`image-${index}`} image={item.value} />
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
