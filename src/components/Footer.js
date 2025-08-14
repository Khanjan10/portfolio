import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-center py-6 border-t mt-12">
      <p className="text-sm text-gray-600">© Designed By <b><a 
        href="/" 
        onClick={(e) => {
              e.preventDefault();
              document.getElementById('home').scrollIntoView({behavior: "smooth"});
            }} >
              Khanjan Gadhiya.
            </a></b></p>
    </footer>
  );
};
// © {new Date().getFullYear()}
export default Footer;