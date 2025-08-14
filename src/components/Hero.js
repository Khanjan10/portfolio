import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaBook } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-4 text-center bg-cover bg-center bg-no-repeat"
      style={{
        background: `
          linear-gradient(180deg, #f9fafb 50%, #eef2ff 100%)`
        }}
    >
      {/* Social icons left sidebar */}
      <div className="hidden md:flex flex-col absolute top-1/3 left-4 space-y-4">
        <a href="https://linkedin.com/in/khanjan-gadhiya" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-700 bg-white p-2 rounded shadow">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-800 bg-white p-2 rounded shadow">
          <FaGithub size={20} />
        </a>
      </div>

      <div className="bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-5xl mb-4 font-bold text-navy">I'm Khanjan Gadhiya</h1>
        <h2 className="text-3xl text-purple-600 font-semibold mt-2">
          Full-Stack Web Developer
        </h2>

        <a
          href="#contact"
          className="mt-6 inline-block bg-purple-600 text-white hover:bg-purple-700 px-6 py-2 font-semibold rounded-full transition"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
};

export default Hero;