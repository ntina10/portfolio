import HoverHighlight from "./HoverHighlight";
import data from "../assets/data.json";

const Intro = () => {
  return (
    <h1 className="intro pl-40">
      Hello. My name is Konstantina. <br /> As a software developer, I love
      bringing{" "}
      <HoverHighlight pathData={data.ideas_to_life}>
        ideas to life
      </HoverHighlight>{" "}
      by building{" "}
      <HoverHighlight pathData={data.web_and_mobile}>
        web and mobile
      </HoverHighlight>{" "}
      products. I am passionate about creating{" "}
      <HoverHighlight pathData={data.user_centered}>
        user-centered
      </HoverHighlight>{" "}
      experiences that make a{" "}
      <HoverHighlight pathData={data.meaningful}>meaningful</HoverHighlight>{" "}
      impact.
    </h1>
  );
};

export default Intro;
