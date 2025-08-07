import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWordpress, FaShopify, FaGithub, FaCode, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiExpress, SiJsonwebtokens, SiSocketdotio, SiMongodb, SiMysql, SiStripe, SiTailwindcss } from "react-icons/si";

const skillIcons = {
  React: <FaReact className="text-blue-500" />,
  HTML: <FaHtml5 className="text-orange-600" />,
  CSS: <FaCss3Alt className="text-blue-600" />,
  TailwindCSS: <SiTailwindcss className="text-blue-600" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  Express: <SiExpress className="text-gray-700" />,
  JWT: <SiJsonwebtokens className="text-pink-500" />,
  "Socket.io": <SiSocketdotio className="text-gray-900" />,
  MongoDB: <SiMongodb className="text-green-700" />,
  MySQL: <SiMysql className="text-blue-700" />,
  GitHub: <FaGithub className="text-gray-800" />,
  "VS Code": <FaCode className="text-blue-600" />,
  WordPress: <FaWordpress className="text-blue-900" />,
  Shopify: <FaShopify className="text-green-800" />
};

const skillsByCategory = {
  Frontend: ["React", "HTML", "CSS", "JavaScript", "TailwindCSS"],
  Backend: ["Node.js", "Express", "JWT", "Socket.io"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["GitHub", "VS Code"]
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allSkills = Object.values(skillsByCategory).flat();
  const displayedSkills =
    selectedCategory === "All"
      ? allSkills
      : skillsByCategory[selectedCategory] || [];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <p className="mb-8 text-gray-600">
        Explore my technical skillset categorized by development areas
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["All", ...Object.keys(skillsByCategory)].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="text-3xl mb-2">{skillIcons[skill]}</div>
            <span className="text-sm font-medium text-gray-800">{skill}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
