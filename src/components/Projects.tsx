import { useState } from "react";
import ProjectFolder from "./ProjectFolder";

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
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  return (
    <section id="projects">
      <h2 className="title pt-10 pb-20 pl-40">My Projects</h2>
      <div className="max-w-3/4 mx-auto -space-y-14">
        <ProjectFolder
          title="NNEDS"
          color="bg-emerald-200"
          tabPosition="left-1/8"
          isOpen={openFolder === "NNEDS"}
          onToggle={() =>
            setOpenFolder(openFolder === "NNEDS" ? null : "NNEDS")
          }
        >
          <div className="space-y-4 text-black/70">
            <p>
              As a student frontend developer, I was part of making a complex
              scientific data tool more user-friendly. My job included building
              four major features: A user support modal, a data point annotation
              feature, a UX upgrade, and a new admin page for access control.
            </p>
            <br />
            <p>
              <i>Technologies:</i> Vue.js, Figma, Azure DevOps
            </p>
            <br />
            <h3 className="pb-4">
              Feature 1: Centralized User Support & Feedback
            </h3>
            <p>
              <b>The Goal:</b> The platform's users lacked a simple, in-app way
              to find help or report issues. <br />
              <b>My Solution:</b> I developed a comprehensive user support modal
              that provides direct access to user guides and other resources.
              Most importantly, I implemented a "Contact Us" form that
              seamlessly integrates with our Azure DevOps workflow. Users can
              now report a bug or request a feature directly within the app and
              a corresponding work item (Bug or User Story) is then
              automatically created in our ADO backlog. <br />
              <b>The Impact:</b> This feature empowered users to find answers
              and voice feedback effortlessly. It also improved our team's
              workflow, ensuring that every user issue was captured,
              categorized, and addressed efficiently.
            </p>
            <ImagesGallery
              images={[
                "/projects/UserSupport.png",
                "/projects/UserSupportGuides.png",
                "/projects/USFormQuestion.png",
                "/projects/USFormResult.png",
              ]}
            ></ImagesGallery>

            <h3 className="pb-4">
              Feature 2: Interactive Data Point Annotation
            </h3>
            <p>
              <b>The Goal:</b> The process for annotating data on the platform's
              statistical process control (SPC) graphs was indirect. Users had
              to copy and paste specific IDs and graph names and navigate in the
              main settings of the platform, making data analysis cumbersome.{" "}
              <br />
              <b>My Solution:</b> I implemented an intuitive graph annotation
              feature. Users can now click on any data point to open a small
              modal where they can add a textual comment or choose to exclude
              the point from statistical calculations. All annotations are then
              neatly compiled in a side panel, where they can be reviewed,
              edited, or deleted. The graph dynamically updates to reflect these
              changes. <br />
              <b>The Impact:</b> This feature made data analysis much faster and
              more intuitive, keeping a clear, contextual record of all
              analytical decisions directly on the graph where it matters most.
            </p>
            <ImagesGallery
              images={[
                "/projects/SPCcomment.png",
                // "/projects/SPCexclude.png",
                "/projects/SPChoveringOverComment.png",
                "/projects/SPCwithCommentFromHistory.png",
              ]}
            ></ImagesGallery>

            <h3 className="pb-4">
              Feature 3: UI/UX Redesign with a New Design System
            </h3>
            <p>
              <b>The Goal:</b> The platform's main pages had an outdated user
              interface. A new, company-wide design system was available, but it
              had not yet been implemented in our project. The challenge was to
              modernize the platform's look and feel while creating a more
              intuitive user journey. <br /> <b>My Solution:</b> I lead the
              UI/UX revamp of the platform's core pages. Starting with initial
              design mockups, I used Figma to refine the details, handle various
              states, and design any additional pages needed for a cohesive
              experience. I then moved on to the frontend development, that
              involved translating the refined Figma designs into a library of
              reusable, accessible, and responsive components. <br />
              <b>The Impact:</b> The result was a clean, modern, and highly
              intuitive interface that improved the users’ experience.
            </p>
            <ImagesGallery
              images={[
                "/projects/LandingPage.png",
                // "/projects/LPwithTooltip.png",
                "/projects/ExplorePage.png",
                "/projects/EPwithResults.png",
              ]}
            ></ImagesGallery>

            <h3 className="pb-4">Feature 4: Role-based access control</h3>
            <p>
              <b>The Goal:</b> The platform lacked a way to manage user
              permissions, making it impossible to restrict access to sensitive
              data solutions based on a user's role. <br />
              <b>My Solution:</b> In collaboration with the team, I designed and
              developed an admin page for managing user rights. On this page,
              administrators can add or remove users from a solution and assign
              them specific roles (e.g., Admin, Editor, Viewer). <br />
              <b>The Impact:</b> This introduced a critical layer of security
              and data governance. It gave solution owners full control over who
              could see or modify their data, ensuring sensitive information
              remained protected and properly managed.
            </p>
            <ImagesGallery
              images={[
                "/projects/AdminPage.png",
                "/projects/AdminPageEdit.png",
              ]}
            ></ImagesGallery>
          </div>
        </ProjectFolder>

        <ProjectFolder
          title="Ambulance Adventure"
          color="bg-blue-200"
          tabPosition="left-2/8"
          isOpen={openFolder === "Ambulance Adventure"}
          onToggle={() =>
            setOpenFolder(
              openFolder === "Ambulance Adventure"
                ? null
                : "Ambulance Adventure"
            )
          }
        >
          <div className="space-y-4 text-black/70">
            <p>
              For my Master's Thesis, I tackled the challenge of reducing
              anxiety for children aged 4-7 in the Pediatric Emergency
              Department at Herlev Hospital. The result is "Ambulance
              Adventure," a fully functional, wall-mounted board game that
              familiarizes children with the hospital journey through playful
              exploration.
            </p>
            <br />
            <p>
              <i>Technologies:</i> Fusion 360, Fritzing, Arduino, 3D Printing
            </p>
            <br />
            <p>
              <i>My team:</i> Georgia Tsoukala
            </p>
            <br />
            <div className="flex gap-4 py-4">
              <img
                src="/projects/final_board.jpg"
                alt="The board of the game"
                className="rounded-md w-[calc((100%-2rem)/2)]"
              />
              <img
                src="/projects/electronics_inside.jpg"
                alt="Electronics inside the game"
                className="rounded-md w-[calc((100%-2rem)/2)]"
              />
            </div>
            <h3>How to play</h3>
            <p>
              The child drives the ambulance around the path. When it enters a
              room, they can press the buttons located there and listen to
              information regarding the depicted item. The game is open-ended
              and can be played on reverse so that children can feel free to
              explore it however they want.
            </p>
            <h3 className="pt-4">How it works</h3>
            <p>
              The system incorporates 2 arduino boards and 5 rfid readers. The
              first arduino board (arduino A) controls the RFID readers and an
              mp3 player, while the second one (arduino B) controls the buttons
              and leds. The RFID readers are placed on the entrance of each room
              behind the board. When the ambulance enters a room, the tag
              underneath the vehicle gets scanned. This leads to the
              corresponding buttons getting activated and their leds light up.
              When the kid presses on a button, the correct track with info for
              the item plays. Serial communication allows the 2 arduino boards
              to exchange messages. For example, arduino B sends a message to
              arduino A when a button is pressed and the right audio needs to
              play.
            </p>
            <div className="flex gap-4 py-4">
              <img
                src="/projects/test_subject.jpg"
                alt="The board of the game"
                className="rounded-md w-[calc((100%-2rem)/3)]"
              />
              <img
                src="/projects/nurse_playing.jpg"
                alt="Electronics inside the game"
                className="rounded-md w-[calc((100%-2rem)/3)]"
              />
              <img
                src="/projects/me.jpeg"
                alt="Electronics inside the game"
                className="rounded-md w-[calc((100%-2rem)/3)]"
              />
            </div>
            <h3 className="pt-4">The Process</h3>
            <p>
              <b>Human-Centered Research:</b> Conducted on-site research at
              Herlev Hospital, including interviews with nursing staff and
              observations in the Pediatric Emergency Department to define the
              core problem and user needs. <br />
              <b>Iterative Prototyping:</b> Designed and user-tested three
              low-fidelity concepts, leading to the selection and refinement of
              the final "Ambulance Adventure" game board, which was modeled in
              Fusion 360 and built using laser-cutting and 3D printing. <br />
              <b>Interactive System Development:</b> Engineered a complete
              electronic system from the ground up using two Arduino boards,
              five RFID readers, and an MP3 module to create a seamless,
              responsive, and fully independent user interaction. <br />
              <b>Impact Evaluation:</b> Performed a mixed-methods evaluation
              with 13 children in the hospital's emergency waiting area,
              validating the design's success in reducing self-reported anxiety
              and its positive reception by both children and their parents.
            </p>
          </div>
        </ProjectFolder>

        <ProjectFolder
          title="Moodle"
          color="bg-blue-300"
          tabPosition="left-3/8"
          isOpen={openFolder === "Moodle"}
          onToggle={() =>
            setOpenFolder(openFolder === "Moodle" ? null : "Moodle")
          }
        >
          <div className="space-y-4 text-black/70">
            <p>
              For my diploma thesis, I developed "Moodle", a fully functional
              Android application that recommends music by analyzing a user's
              facial expression to determine their current mood. I was
              responsible for bringing a complete UI/UX design to life, building
              the mobile app, creating a backend API for the machine learning
              component, and integrating with the Spotify API. The final product
              is a seamless mobile experience where a user can take a selfie and
              instantly receive a curated playlist that matches their mood.
            </p>
            <br />
            <p>
              <i>Technologies:</i> Flutter, Flask, Py-Feat, Spotify API
            </p>
            <br />
            <ImagesGallery
              images={[
                "/projects/onboarding.jpg",
                "/projects/vibes.jpg",
                "/projects/intro.jpg",
                "/projects/countdown.jpg",
                "/projects/selfie.jpg",
                "/projects/mood_result.jpg",
                "/projects/analytics.jpg",
                "/projects/music_results.jpg",
                "/projects/review.jpg",
              ]}
            ></ImagesGallery>
            <h3>How it works</h3>
            <p>
              <b>Facial Emotion Recognition:</b> I implemented a pipeline that
              uses the phone's camera to capture a photo of the user. This image
              is then sent to the Python API, which utilizes the Py-Feat
              open-source toolbox to analyze the facial expression. The API
              processes the image to detect the probabilities of seven core
              emotions (happy, sad, anger, surprise, disgust, fear, and neutral)
              and returns the dominant emotion to the app. <br />
              <b>Music Recommendation Engine:</b> The system first prompts the
              user to select up to five of their favorite music genres. After an
              emotion is detected, it is mapped to a specific range of valence
              (musical positiveness) and energy values. These values, along with
              the selected genres, are sent to the Spotify API's Get
              Recommendations endpoint to generate a unique and mood-appropriate
              list of songs. <br />
              <b>UI Implementation:</b> Working from a design provided by a UX
              designer, the process included building the onboarding carousel,
              genre selection screen, camera interface, and the final playlist
              view, which features a custom audio player for previews and a
              5-star rating system.
            </p>
            <h3 className="pt-4">Promotional Website</h3>
            <p>
              To showcase the project, I also created a single-page promotional
              website for the app. Check it out{" "}
              <a href="https://ntina10.github.io/Moodle/" target="_blank">
                here
              </a>
              !
            </p>
            <img
              src="/projects/moodle_page.png"
              alt="Moodle website"
              className="rounded-md w-full pt-8"
            />
          </div>
        </ProjectFolder>

        <ProjectFolder
          title="CheckIt"
          color="bg-violet-200"
          tabPosition="left-4/8"
          isOpen={openFolder === "CheckIt"}
          onToggle={() =>
            setOpenFolder(openFolder === "CheckIt" ? null : "CheckIt")
          }
        >
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

        <ProjectFolder
          title="YellowPages"
          color="bg-purple-300"
          tabPosition="left-5/8"
          isOpen={openFolder === "YellowPages"}
          onToggle={() =>
            setOpenFolder(openFolder === "YellowPages" ? null : "YellowPages")
          }
        >
          <div className="space-y-4 text-black/70">
            <p>
              Developed a complete brand identity for a local startup, including
              logo design, color palette, and typography guidelines.
            </p>
            <img
              src="/path/to/your/branding-image.jpg"
              alt="Branding project moodboard"
              className="rounded-md"
            />
          </div>
        </ProjectFolder>

        {/* <ProjectFolder title="Other" color="bg-gray-400" tabPosition="left-6/8">
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
        </ProjectFolder> */}
      </div>
    </section>
  );
};

export default Projects;
