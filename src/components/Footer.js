import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#ef8a68]">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex justify-between">
            <div>
              <p className="text-center">
                &copy; J Foods and Co. Pinched with ❤️. All rights reserved.
              </p>
            </div>
            <div className="flex justify-center ">
              <nav className="flex space-x-4 mr-8">
                <Link to="/offers" className="hover:text-white">
                  Offers
                </Link>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
                <Link to="/contact" className="hover:text-white">
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
