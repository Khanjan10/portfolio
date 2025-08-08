import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaClock,
  FaLinkedin,
  FaGithub,
  FaEnvelopeSquare
} from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent redirect
    setLoading(true);

    const formData = new FormData(e.target);

    await fetch("https://formsubmit.co/khanjangadhiya@gmail.com", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    e.target.reset();
    setSuccess(true);

    // Hide message after 5 seconds
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
      <p className="text-center text-gray-600 mb-12">
        Ready to start your next project? Let's discuss how I can help bring your vision to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-full">
              <FaEnvelope className="text-white" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:khanjangadhiya@gmail.com"
                className="text-gray-600"
              >
                khanjangadhiya@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-full">
              <FaPhone className="text-white" />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <a href="tel:+919769179774" className="text-gray-600">
                +91 97691 79774
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-full">
              <FaClock className="text-white" />
            </div>
            <div>
              <p className="font-semibold">Response Time</p>
              <p className="text-gray-600">Typically within 24 hours</p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/KhanjanGadhiya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-3 rounded-lg"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/khanjan-gadhiya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-3 rounded-lg"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:khanjangadhiya@gmail.com"
              className="bg-red-500 text-white p-3 rounded-lg"
            >
              <FaEnvelopeSquare />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Project inquiry"
            className="w-full border px-4 py-2 rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            className="w-full border px-4 py-2 rounded min-h-[120px]"
            maxLength={500}
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {success && (
            <p className="mt-4 p-3 border border-green-500 text-green-600 rounded bg-green-50">
              ✅ Your message has been sent!
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
