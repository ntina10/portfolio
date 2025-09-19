import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useState } from "react";

const CardText = ({ text }: { text: string }) => {
  return (
    <div className="card rounded-lg bg-white h-[240px] w-[180px] px-10 text-2xl flex items-center justify-center">
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

  const textMarqueeVariants = {
    animate: {
      x: [0, -1354], // Move from x=0 to x=-1024 (adjust this value based on text length)
      transition: {
        x: {
          repeat: Infinity,
          duration: 15,
          ease: ["linear"],
        },
      },
    },
  };

  const cardMarqueeVariants = {
    animate: {
      x: [-2480, 0], // Move from -2512px to 0px
      transition: {
        x: {
          repeat: Infinity,
          duration: 40, // A slower duration for a calmer feel
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="more-about" className="more-about my-20 bg-[#f2ece1]">
      <div
        className="w-full overflow-hidden cursor-pointer py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className="flex whitespace-nowrap hover:text-amber-600"
          variants={textMarqueeVariants}
          animate="animate"
        >
          {/* Render the text multiple times to ensure it fills the screen and loops smoothly */}
          <h2 className="text-lg py-2 pr-8">Wanna know more about me?</h2>
          <h2 className="text-lg py-2 pr-8">Wanna know more about me?</h2>
          <h2 className="text-lg py-2 pr-8">Wanna know more about me?</h2>
          <h2 className="text-lg py-2 pr-8">Wanna know more about me?</h2>
          <h2 className="text-lg py-2 pr-8">Wanna know more about me?</h2>
          <h2 className="text-lg py-2 pr-8">Wanna know more about me?</h2>
          <h2 className="text-lg py-2 pr-8">Wanna know more about me?</h2>
          <h2 className="text-lg py-2 pr-8">Wanna know more about me?</h2>
          <h2 className="text-lg py-2 pr-8">Wanna know more about me?</h2>
          <h2 className="text-lg py-2 pr-8">Wanna know more about me?</h2>
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="content py-3 w-full"
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
              <CardImage image="/images/seagull.jpg" />
              <CardImage image="/images/bear.jpg" />
              <CardImage image="/images/bunny.jpg" />
              <CardText text="I love making animals out of yarn" />
              <CardImage image="/images/crab.jpg" />
              <CardImage image="/images/dog.jpg" />
              <CardImage image="/images/ladybug.jpg" />
              <CardText text="I love making animals out of yarn" />
              <CardImage image="/images/duck.jpg" />
              <CardImage image="/images/tucan.jpg" />
              <CardImage image="/images/fox.jpg" />
              <CardText text="I love making animals out of yarn" />
              <CardImage image="/images/seagull.jpg" />
              <CardImage image="/images/bear.jpg" />
              <CardImage image="/images/bunny.jpg" />
              <CardText text="I love making animals out of yarn" />
              <CardImage image="/images/crab.jpg" />
              <CardImage image="/images/dog.jpg" />
              <CardImage image="/images/ladybug.jpg" />
              <CardText text="I love making animals out of yarn" />
              <CardImage image="/images/duck.jpg" />
              <CardImage image="/images/tucan.jpg" />
              <CardImage image="/images/fox.jpg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
