import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 border-t mt-12">
      <p className="text-sm text-gray-600">© {new Date().getFullYear()} <b><a href="#">Khanjan Gadhiya.</a></b> All rights reserved.</p>
    </footer>
  );
};

export default Footer;