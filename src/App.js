import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;