import React, { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "WanderStay",
    description:
      "Full-stack clone of Airbnb using Node.js, Express, and MongoDB. Built with MVC architecture and a responsive UI.",
    techStack: ["Node.js", "Express", "MongoDB", "EJS"],
    image: "/assets/projects/WanderStay.png",
    link: "https://airbnb-clone-qpjf.onrender.com/listings",
    category: "MERN Stack"
  },
  {
    title: "Spotify UI Replica",
    description:
      "Frontend-only project replicating the Spotify web UI using HTML, CSS, and JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/assets/projects/spotify.png",
    link: "https://github.com/Khanjan10/spotify-clone",
    category: "Frontend"
  },
  {
    title: "Riseon Elevators",
    description:
      "Business website for an elevator company built with WordPress. Custom theme development, image galleries, and SEO.",
    techStack: ["WordPress", "PHP", "MySQL"],
    image: "/assets/projects/riseone.png",
    link: "http://riseonelevators.com",
    category: "WordPress"
  },
  {
    title: "Lasik Vision",
    description:
      "WordPress website for a LASIK eye surgery clinic featuring custom theme design, treatment details, doctor profiles, and SEO optimization.",
    techStack: ["WordPress", "PHP", "MySQL"],
    image: "/assets/projects/lasikvision.png",
    link: "https://lasikvision.in/",
    category: "WordPress"
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category === selectedCategory);

  return (
    <section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <p className="mb-8 text-gray-600">
        A showcase of my recent work across different technologies and industries
      </p>

      <div className="flex justify-center space-x-4 mb-12">
        {["All", "MERN Stack", "Frontend", "WordPress"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden text-left"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary text-black text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold border border-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition duration-200"
              >
                View Project
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
