type SkillTagProps = {
  name: string;
};

const SkillTag = ({ name }: SkillTagProps) => (
  <div className="skilltag rounded-full inline-block border border-stone-400 px-4 py-1 h-9">
    {name}
  </div>
);

const About = () => {
  return (
    <div id="about" className="pl-20 lg:pl-40 pr-15 lg:pr-25">
      <h2 className="py-10">About me</h2>
      <div className="hidden md:block md:col-span-3" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12">
        {/* SECTION 1: Frontend Developer Experience */}
        {/* Left Column */}
        <div className="md:text-left md:mr-24 font-mono">
          <h3 className="sticky top-16">
            I worked as a Frontend Developer at Novo Nordisk.
          </h3>
        </div>

        {/* Right Column (spans 3 grid columns) */}
        <div className="md:col-span-3">
          <h3 className="text-lg">Novo Nordisk</h3>
          <p className="text-sm text-stone-600 mb-8">
            Frontend Developer, 2024-2025
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* First Team Column */}
            <div>
              <p>NNEDS Team</p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-stone-700">
                <li>
                  Developed and enhanced features on a Django and Vue3 platform.
                </li>
                <li>
                  Led a 5-month UI/UX revamp of the platform dashboard and main
                  pages, improving design consistency and user experience.
                </li>
                <li>
                  Implemented an admin panel enabling solution owners to assign
                  role-based access to their users, improving platform
                  manageability.
                </li>
              </ul>
            </div>

            {/* Second Team Column */}
            <div>
              <p>PSChat Team</p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-stone-700">
                <li>
                  Acted as the primary contact for a custom chatbot creation use
                  case.
                </li>
                <li>
                  Assisted in user onboarding by creating instructional videos
                  and participating in internal presentations to promote tool
                  adoption.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 2: Android Developer Experience */}
        {/* Left Column */}
        <div className="md:text-left md:mr-24 font-mono">
          <h3 className="sticky top-16">
            I worked as an Android Developer intern.
          </h3>
        </div>

        {/* Right Column */}
        <div className="md:col-span-3">
          <h3 className="text-lg">Telenavis</h3>
          <p className="text-sm text-stone-600 mb-4">Android Developer, 2021</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Built a mobile Android app using Java/Kotlin and ARCore to
              estimate cow weight based on body measurements for use in
              agriculture.
            </li>
            <li>
              Developed an AR-based interface that allowed users to place
              spatial points on live camera feed to calculate key body
              dimensions.
            </li>
            <li>
              Implemented core features including user authentication, a
              dashboard, and measurement history tracking.
            </li>
          </ul>
        </div>

        {/* SECTION 3: Education */}
        {/* Left Column */}
        <div className="md:text-left md:mr-24 font-mono">
          <h3 className="sticky top-16">
            I earned a bachelor's in Electrical and Computer Engineering and a
            master's in Human-Centered AI.
          </h3>
        </div>

        {/* Right Column */}
        <div className="md:col-span-3 space-y-8">
          <div>
            <h3 className="text-lg">Technical University of Denmark</h3>
            <p>Human-Centered Artificial Intelligence, 2023-2025</p>
          </div>
          <div>
            <h3 className="text-lg">National Technical University of Athens</h3>
            <p>Electrical and Computer Engineering, 2017-2022</p>
          </div>
        </div>

        {/* SECTION 4: Skills & Tools */}
        {/* Left Column */}
        <div className="md:text-left md:mr-24 font-mono">
          <h3 className="sticky top-16">
            I have built projects in several languages and used many different
            tools.
          </h3>
        </div>

        {/* Right Column */}
        <div className="md:col-span-3 gap-3 flex flex-wrap">
          <SkillTag name="Vue" />
          <SkillTag name="React" />
          <SkillTag name="React Native" />
          <SkillTag name="JavaScript" />
          <SkillTag name="Flutter" />
          <SkillTag name="Python" />
          <SkillTag name="Django" />
          <SkillTag name="Git" />
          <SkillTag name="Figma" />
          <SkillTag name="Fusion 360" />
        </div>
      </div>
    </div>
  );
};

export default About;
