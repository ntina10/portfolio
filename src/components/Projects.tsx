import react from "react";
import ProjectFolder from "./ProjectFolder";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="title pt-10 pb-20 pl-40">My Projects</h2>
      <div className="px-10 -space-y-14">
        {/* bg-[#f6cf30] */}
        <ProjectFolder title="NNEDS" color="bg-cyan-400">
          <div className="space-y-4 text-black/70">
            <p>
              A minimalist web gallery designed for photographers to showcase
              their work. Built with a focus on performance and a clean,
              unobtrusive UI.
            </p>
            <img
              src="/path/to/your/photoworks-image.jpg"
              alt="Screenshot of the PhotoWorks project"
              className="rounded-md shadow-inner"
            />
            <div className="flex gap-4">
              <a href="#" className="font-bold text-indigo-600 hover:underline">
                Live Site
              </a>
              <a href="#" className="font-bold text-indigo-600 hover:underline">
                Case Study
              </a>
            </div>
          </div>
        </ProjectFolder>

        <ProjectFolder title="Ambulance Adventure" color="bg-blue-200">
          <div className="space-y-4 text-black/70">
            <p>
              Developed a complete brand identity for a local startup, including
              logo design, color palette, and typography guidelines.
            </p>
            <img
              src="/path/to/your/branding-image.jpg"
              alt="Branding project moodboard"
              className="rounded-md shadow-inner"
            />
          </div>
        </ProjectFolder>

        <ProjectFolder title="Moodle" color="bg-blue-300">
          <div className="space-y-4 text-black/70">
            <p>
              Developed a complete brand identity for a local startup, including
              logo design, color palette, and typography guidelines.
            </p>
            <img
              src="/path/to/your/branding-image.jpg"
              alt="Branding project moodboard"
              className="rounded-md shadow-inner"
            />
          </div>
        </ProjectFolder>

        <ProjectFolder title="CheckIt" color="bg-violet-200">
          <div className="space-y-4 text-black/70">
            <p>
              Developed a complete brand identity for a local startup, including
              logo design, color palette, and typography guidelines.
            </p>
            <img
              src="/path/to/your/branding-image.jpg"
              alt="Branding project moodboard"
              className="rounded-md shadow-inner"
            />
          </div>
        </ProjectFolder>

        <ProjectFolder title="YellowPages" color="bg-purple-300">
          <div className="space-y-4 text-black/70">
            <p>
              Developed a complete brand identity for a local startup, including
              logo design, color palette, and typography guidelines.
            </p>
            <img
              src="/path/to/your/branding-image.jpg"
              alt="Branding project moodboard"
              className="rounded-md shadow-inner"
            />
          </div>
        </ProjectFolder>

        <ProjectFolder title="Other" color="bg-gray-400">
          <div>
            <p>
              Developed a complete brand identity for a local startup, including
              logo design, color palette, and typography guidelines.
            </p>
            <img
              src="/path/to/your/branding-image.jpg"
              alt="Branding project moodboard"
            />
          </div>
        </ProjectFolder>
      </div>
    </section>
  );
};

export default Projects;
