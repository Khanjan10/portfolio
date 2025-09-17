import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaBook, FaWhatsapp } from "react-icons/fa";

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
      <div className="hidden items-center md:flex flex-col absolute left-1 space-y-4">
        {/* Linkedin */}
        <a
          href="https://linkedin.com/in/khanjan-gadhiya"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0A66C2] p-2 rounded shadow hover:scale-110 transition"
        >
          <FaLinkedin size={20} color="white" /> {/* LinkedIn blue */}
        </a>

        {/* Github */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
            className="bg-[#181717] p-2 rounded shadow hover:scale-110 transition"
        >
          <FaGithub size={20} color="white" /> {/* GitHub black */}
        </a>
        
        {/* WhatsApp */}
        <a
          href="https://wa.me/+919769179774"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] p-2 rounded shadow hover:scale-110 transition"
        >
          <FaWhatsapp size={20} color="white" /> {/* WhatsApp */}
        </a>
      </div>


      <div className="bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-5xl mb-4 font-bold text-navy">I'm Khanjan Gadhiya</h1>
        <h2 className="text-3xl text-purple-600 font-semibold mt-2">
          Full-Stack Web Developer
        </h2>

        <a
        onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({behavior: "smooth"});
            }} 
          className="mt-6 inline-block bg-purple-600 text-white cursor-pointer border hover:bg-white hover:text-black hover:border-primary px-6 py-2 font-semibold rounded-full transition"
        >
          Contact Me
        </a>
        <a
           onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects').scrollIntoView({behavior: "smooth"});
            }} 
          className="mt-6 mx-4 inline-block border border-primary cursor-pointer bg-white text-black hover:bg-purple-700 hover:text-white px-6 py-2 font-semibold rounded-full transition"
        >
          View Projects
        </a>
      </div>

    </section>
  );
};

export default Hero;