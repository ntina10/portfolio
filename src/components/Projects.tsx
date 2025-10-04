import ProjectContent from "./ProjectContent";
import ProjectFolder from "./ProjectFolder";
import projectData from "../assets/projectData.json";

const ImagesGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Project screenshot ${index + 1}`}
          className="h-80 rounded-lg shrink-0"
        />
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#f2ece1]">
      <h2 className="ovo text-[24px] md:text-4xl pt-10 pb-20 px-20 lg:px-40">
        My Projects
      </h2>
      <div className="max-w-8/9 lg:max-w-4/5 mx-auto -space-y-14">
        <ProjectFolder
          title="NNEDS"
          color="bg-emerald-200"
          tabPosition="md:left-1/8"
        >
          <ProjectContent project={projectData[0]} />
        </ProjectFolder>

        <ProjectFolder
          title="Ambulance Adventure"
          color="bg-blue-200"
          tabPosition="md:left-2/8"
        >
          <ProjectContent project={projectData[1]} />
        </ProjectFolder>

        <ProjectFolder
          title="Moodle"
          color="bg-blue-300"
          tabPosition="md:left-3/8"
        >
          <ProjectContent project={projectData[2]} />
        </ProjectFolder>

        <ProjectFolder
          title="CheckIt"
          color="bg-violet-200"
          tabPosition="md:left-4/8"
        >
          <ProjectContent project={projectData[3]} />
        </ProjectFolder>

        <ProjectFolder
          title="YellowPages"
          color="bg-purple-300"
          tabPosition="md:left-5/8"
        >
          <ProjectContent project={projectData[4]} />
        </ProjectFolder>
      </div>
    </section>
  );
};

export default Projects;
