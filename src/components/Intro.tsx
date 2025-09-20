import HoverHighlight from "./HoverHighlight";
import data from "../assets/data.json";
import Greeting from "./Greeting";

const Intro = () => {
  return (
    <h1 className="intro px-40 py-30 lg:max-w-5/6">
      Hello.
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
    </h1>
  );
};

export default Intro;
