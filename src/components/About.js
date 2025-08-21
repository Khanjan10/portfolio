import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-4xl mx-auto text-center"
    >
      <h2 className="lg:text-3xl sm:text-xl font-bold mb-4">About Me</h2>
      <div className="max-w-3xl mx-auto text-center sm:text-left">
  <p className="text-lg sm:text-md mb-6">
    I’m a <span className="font-semibold text-purple-600">Full-Stack Web Developer </span> 
    with <span className="font-semibold">2+ years of experience</span> building robust and scalable applications using the 
    <span className="font-semibold"> MERN stack</span> (MongoDB, Express.js, React, Node.js) and WordPress. 
    I thrive on solving problems, writing clean code, and creating applications that deliver both performance and great user experience.
  </p>
  
  <ul className="space-y-3 text-md text-gray-700">
    <li className="flex items-start">
      <span className="text-purple-600 mr-2">🚀</span>
      Built and deployed multiple full-stack projects, including an &nbsp; <span className="font-medium">Airbnb Clone </span>&nbsp; and a &nbsp;<span className="font-medium">Spotify UI Replica </span>.
    </li>
    <li className="flex items-start">
      <span className="text-purple-600 mr-2">🛠</span>
      Strong expertise in &nbsp;<span className="font-medium">authentication, REST APIs, database management</span>, and &nbsp;<span className="font-medium">responsive UI design</span>.
    </li>
    <li className="flex items-start">
      <span className="text-purple-600 mr-2">🎓</span>
      Certified in &nbsp;<span className="font-medium">MERN Stack Development</span>, with hands-on project experience.
    </li>
    <li className="flex items-start">
      <span className="text-purple-600 mr-2">🤝</span>
      Experience collaborating with startups and established companies, adapting quickly to diverse workflows.
    </li>
    <li className="flex items-start">
      <span className="text-purple-600 mr-2">📈</span>
      Passionate about continuous learning, staying up-to-date with modern web technologies and best practices.
    </li>
  </ul>
</div>

    </section>
  );
};

export default About;