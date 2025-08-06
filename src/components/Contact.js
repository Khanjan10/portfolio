import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelopeSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
      <p className="text-center text-gray-600 mb-12">
        Ready to start your next project? Let's discuss how I can help bring your vision to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaEnvelope className="text-blue-600" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">khanjangadhiya@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaPhone className="text-blue-600" />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+91 97691 79774</p>
            </div>
          </div>
          {/* <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaMapMarkerAlt className="text-blue-600" />
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">Ahmedabad, India</p>
            </div>
          </div> */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaClock className="text-blue-600" />
            </div>
            <div>
              <p className="font-semibold">Response Time</p>
              <p className="text-gray-600">Typically within 24 hours</p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/KhanjanGadhiya" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-3 rounded-lg">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/khanjan-gadhiya" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-lg">
              <FaLinkedin />
            </a>
            <a href="mailto:khanjangadhiya@gmail.com" className="bg-red-500 text-white p-3 rounded-lg">
              <FaEnvelopeSquare />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Project inquiry"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <textarea
            placeholder="Tell me about your project..."
            className="w-full border px-4 py-2 rounded min-h-[120px]"
            maxLength={500}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
