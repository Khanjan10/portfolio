import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  const certificate = {
    title: "Full Stack Web Development",
    issuer: "Apna College",
    date: "Jan 2024 - Oct 2024",
    description: [
      "Created various small projects in MERN to strengthen core concepts.",
      "Built and deployed major full-stack projects demonstrating real-world application.",
      "Strengthened core concepts through small projects and real-world applications.",
      "Learned industry best practices and day-to-day development rules for building scalable, responsive websites."
    ],
    link: "https://drive.google.com/file/d/1mIXCEaQRVL8FHqZQcu0fnUuXHH70B3rz/view?usp=sharing",
    skills: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "TailwindCSS",
      "REST API",
    ]
  };

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl text-center font-bold mb-4">
        Certifications
      </h2>
      <p className="text-center text-gray-600 mb-12">
        A glimpse of my achievements and professional growth.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white shadow-md p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition"
      >
        <div className="flex items-center gap-3 mb-3">
          <FaAward className="text-primary text-2xl" />
          <h3 className="text-xl font-semibold text-gray-800">
            {certificate.title}
          </h3>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700 font-medium">{certificate.issuer}</p>
          <p className="text-gray-700 font-medium text-sm mb-4">{certificate.date}</p>
        </div>

        {/* Bullet Points */}
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 mt-2 mb-5">
          {certificate.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* ✅ Skills Learned */}
        <div className="mb-5">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Skills Learned:</h4>
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary text-black text-xs font-semibold rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* View Certificate Button */}
        {certificate.link && (
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full font-medium text-sm hover:bg-purple-700 transition"
          >
            View Certificate <FaExternalLinkAlt className="text-xs" />
          </a>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Certifications;
