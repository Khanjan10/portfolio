import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-2xl sm:text-xl font-semibold mb-4">About Me</h2>
      <p className="text-lg sm:text-xl">
        With over 2+ years of experience in web development, I specialize in creating robust, scalable applications using the MERN stack (MongoDB, Express.js, React, Node.js) and WordPress. My journey began with a computer science degree and has evolved through working with startups and established companies.
  I'm passionate about writing clean, efficient code and staying up-to-date with the latest industry trends. Whether it's building a complex web application from scratch or customizing WordPress themes, I approach every project with enthusiasm and attention to detail.
      </p>
    </motion.section>
  );
};

export default About;