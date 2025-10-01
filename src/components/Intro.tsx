import HoverHighlight from "./HoverHighlight";
import { motion } from "framer-motion";
import data from "../assets/data.json";
import Greeting from "./Greeting";

const Intro = () => {
  return (
    <motion.h1 className="ovo text-[24px] md:text-4xl px-20 lg:px-40 py-10 lg:py-30 xl:max-w-5/6">
      Hello!
      <Greeting /> My name is Konstantina. <br /> As a{" "}
      <HoverHighlight pathData={data.software}>
        software developer
      </HoverHighlight>
      , I love bringing{" "}
      <HoverHighlight pathData={data.ideas_to_life}>
        ideas to life
      </HoverHighlight>{" "}
      by building{" "}
      <HoverHighlight pathData={data.web_and_mobile}>
        web and mobile
      </HoverHighlight>{" "}
      products. I am{" "}
      <HoverHighlight pathData={data.passionate}>passionate</HoverHighlight>{" "}
      about creating{" "}
      <HoverHighlight pathData={data.user_centered}>
        user-centered
      </HoverHighlight>{" "}
      experiences that make a{" "}
      <HoverHighlight pathData={data.meaningful}>meaningful</HoverHighlight>{" "}
      impact.
    </motion.h1>
  );
};

export default Intro;
