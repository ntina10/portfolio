import { motion } from "framer-motion";

export default function MoreAbout() {
  const marqueeVariants = {
    animate: {
      x: [0, -1024], // Move from x=0 to x=-1024 (adjust this value based on text length)
      transition: {
        x: {
          repeat: Infinity,
          duration: 15,
          ease: ["linear"],
        },
      },
    },
  };

  return (
    <section id="more-about" className="more-about my-20 bg-[#f2ece1] py-4">
      <div className="w-full overflow-hidden bg-black/80 text-white">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
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
    </section>
  );
}
