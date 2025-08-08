import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">
          <a href="/" className="flex  space-x-2">
            <img src="/Khanjan-logo.png" alt="Logo" className="w-8 h-8" />
            <span>Khanjan</span>
          </a>
        </h1>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-2xl">☰</button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about').scrollIntoView({behavior: "smooth"});
            }} 
            className="font-semibold hover:text-primary">Home</a>
          <a 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about').scrollIntoView({behavior: "smooth"});
            }}
            className="font-semibold hover:text-primary cursor-pointer">About</a>
          <a
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects').scrollIntoView({behavior: "smooth"});
            }} 
            className="font-semibold hover:text-primary cursor-pointer">Projects</a>
          <a 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({behavior: "smooth"});
            }} 
            className="font-semibold hover:text-primary cursor-pointer">Contact</a>
          <a
            href="/Khanjan_Gadhiya_Web_Developer.pdf"
            download
            className="px-4 py-1 bg-primary text-white rounded hover:bg-gray-800"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 flex flex-col items-start px-4">
          <a href="/" onClick={toggleMenu} className="hover:text-blue-500">Home</a>
          <a href="#about" onClick={toggleMenu} className="hover:text-blue-500">About</a>
          <a href="#projects" onClick={toggleMenu} className="hover:text-blue-500">Projects</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-blue-500">Contact</a>
          <a
            href="/Khanjan_Gadhiya_Web_Developer.pdf"
            download
            className="mt-2 inline-block px-4 py-1 bg-black text-white rounded hover:bg-gray-800"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
