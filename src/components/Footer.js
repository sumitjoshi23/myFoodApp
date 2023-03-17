import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="flex justify-between">
          <div>
            <p className="text-center text-gray-300">
              &copy; MyFood Ordering App with ❤️ All rights reserved.
            </p>
          </div>
          <div className="flex justify-center ">
            <nav className="flex space-x-4">
              <a href="/" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
