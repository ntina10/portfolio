import { motion } from "framer-motion";

const Greeting = () => {
  return (
    <motion.div
      style={{
        marginBottom: "-20px",
        marginRight: "-45px",
        paddingBottom: "20px",
        paddingRight: "45px",
        display: "inline-block",
      }}
      animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      👋
    </motion.div>
  );
};

export default Greeting;
