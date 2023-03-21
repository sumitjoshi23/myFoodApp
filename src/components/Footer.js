import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex justify-between">
            <div>
              <p className="text-center text-gray-300">
                &copy; J Foods and Co. Pinched with ❤️. All rights reserved.
              </p>
            </div>
            <div className="flex justify-center ">
              <nav className="flex space-x-4 mr-8">
                <Link to="/offers" className="text-gray-300 hover:text-white">
                  Offers
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
