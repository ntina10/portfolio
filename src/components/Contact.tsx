import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:ntinafre@gmail.com", // Use mailto: for emails
    icon: <FaEnvelope size={24} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/konstantina-freri/", // Replace with your LinkedIn URL
    icon: <FaLinkedin size={24} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/ntina10", // Replace with your GitHub URL
    icon: <FaGithub size={24} />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="pl-40">
      <h2 className="pb-10">Contact Me</h2>
      <div className="flex justify-start items-center gap-8 md:gap-12">
        {contactLinks.map((link) => (
          <div className="container flex justify-center items-center w-24 h-24 rounded-full bg-purple-200">
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer" // Important for security
              className="hover:text-indigo-600 
                       hover:scale-200 transition-all duration-300"
            >
              {link.icon}
              {/* <span className="font-semibold">{link.name}</span> */}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
