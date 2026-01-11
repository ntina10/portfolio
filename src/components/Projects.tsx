import ProjectContent from "./ProjectContent";
import ProjectFolder from "./ProjectFolder";
import projectData from "../assets/projectData.json";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#f2ece1]">
      <h2 className="ovo text-[24px] md:text-4xl pt-10 pb-20 px-6 sm:px-8 lg:px-10">
        My Projects
      </h2>
      <div className="px-6 sm:px-8 lg:px-10 mx-auto -space-y-14">
        <ProjectFolder
          title="NNEDS"
          color="bg-emerald-200"
          tabPosition="md:left-1/9"
        >
          <ProjectContent project={projectData[0]} />
        </ProjectFolder>

        <ProjectFolder
          title="Ambulance Adventure"
          color="bg-blue-200"
          tabPosition="md:left-2/9"
        >
          <ProjectContent project={projectData[1]} />
        </ProjectFolder>

        <ProjectFolder
          title="Moodle"
          color="bg-blue-300"
          tabPosition="md:left-3/9"
        >
          <ProjectContent project={projectData[2]} />
        </ProjectFolder>

        <ProjectFolder
          title="CheckIt"
          color="bg-violet-200"
          tabPosition="md:left-4/9"
        >
          <ProjectContent project={projectData[3]} />
        </ProjectFolder>

        <ProjectFolder
          title="YellowPages"
          color="bg-purple-300"
          tabPosition="md:left-5/9"
        >
          <ProjectContent project={projectData[4]} />
        </ProjectFolder>
      </div>
    </section>
  );
};

export default Projects;
