import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const contactLinks = [
  {
    name: "Email me",
    href: "mailto:ntinafre@gmail.com", // Use mailto: for emails
    icon: <FaEnvelope size={24} />,
  },
  {
    name: "My LinkedIn",
    href: "https://www.linkedin.com/in/konstantina-freri/", // Replace with your LinkedIn URL
    icon: <FaLinkedin size={24} />,
  },
  {
    name: "My GitHub",
    href: "https://github.com/ntina10", // Replace with your GitHub URL
    icon: <FaGithub size={24} />,
  },
];

const Contact = () => {
  const [showCopyBox, setShowCopyBox] = useState(false);
  const [copiedText, setCopiedText] = useState("Copy :)");
  const emailAddress = "ntinafre@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedText("Copied!");
    setTimeout(() => {
      setCopiedText("Copy :)");
    }, 2000); // Reset after 2 seconds
  };

  const handleMouseEnterEmailGroup = () => {
    setShowCopyBox(true);
  };

  const handleMouseLeaveEmailGroup = () => {
    setShowCopyBox(false);
  };

  return (
    <section id="contact" className="px-6 sm:px-8 lg:px-10">
      <h2 className="ovo text-[24px] md:text-4xl pt-25 pb-20">Let's chat!</h2>
      <div className="flex flex-wrap justify-start gap-4">
        {contactLinks.map((link) => (
          <div
            key={link.name}
            className={
              link.name === "Email me"
                ? "relative flex items-center group"
                : "relative z-10 group"
            }
            onMouseEnter={
              link.name === "Email me" ? handleMouseEnterEmailGroup : undefined
            }
            onMouseLeave={
              link.name === "Email me" ? handleMouseLeaveEmailGroup : undefined
            }
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-button relative flex items-center gap-2 px-6 py-3 rounded-full bg-[#faf6f0] border border-stone-400 transition-colors duration-300 group-hover:bg-indigo-700 group-hover:border-indigo-700 group-hover:text-white z-20"
            >
              <div className="icon-wrapper transition-all duration-300 group-hover:animate-bounce group-hover:text-white">
                {link.icon}
              </div>
              <span className="chivo label text-lg font-medium group-hover:text-white">
                {link.name}
              </span>
            </a>
            {link.name === "Email me" && (
              <>
                {/* Desktop: hover tooltip below */}
                <div
                  className={`hidden md:block absolute transform translate-x-1/2 top-full -mt-2 px-10 py-3 border border-stone-400 rounded-full bg-white text-gray-700 cursor-pointer z-5 chivo transition-all duration-300 ${
                    showCopyBox ? "slide-down" : "slide-up"
                  }`}
                  onMouseEnter={handleMouseEnterEmailGroup}
                  onClick={handleCopyEmail}
                >
                  {copiedText}
                </div>
                {/* Mobile: always visible button to the right */}
                <button
                  onClick={handleCopyEmail}
                  className="md:hidden pill-button relative -ml-4 px-8 py-3 border border-stone-400 rounded-full bg-white text-gray-700 cursor-pointer chivo font-medium"
                >
                  {copiedText}
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
