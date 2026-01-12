import ProjectContent from "./ProjectContent";
import ProjectFolder from "./ProjectFolder";
import projectData from "../assets/projectData.json";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#f2ece1]">
      <h2 className="ovo text-[24px] md:text-4xl pt-10 pb-20 px-6 sm:px-8 lg:px-10">
        My Projects
      </h2>
      <div className="px-6 sm:px-8 lg:px-10 mx-auto -space-y-16">
        {projectData.map((project, index) => (
          <ProjectFolder
            key={index}
            title={project.projectTitle}
            tags={project.tags}
            color={project.color}
            tabPosition={project.tabPosition}
          >
            <ProjectContent project={project} />
          </ProjectFolder>
        ))}
      </div>
    </section>
  );
};

export default Projects;
