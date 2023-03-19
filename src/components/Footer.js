import React from "react";
import { useSelector } from "react-redux";
import { BiPhoneCall } from "react-icons/bi";

const Footer = () => {
  const { user, profile } = useSelector((store) => store.signedInUser);

  return (
    <>
      {profile && (
        <div
          className="fixed top-[50%] left-0 translate-y-[-40%] text-white font-semibold text-sm bg-[#2E4F4F] mx-0 px-1 py-4 rounded rotate-180 hover:scale-125 duration-300 tracking-wide	"
          style={{
            writingMode: "vertical-rl",
          }}
        >
          <i>
            Currently logged in as{" "}
            <span className="text-red-400 font-extrabold">{profile.name}</span>
          </i>
        </div>
      )}
      <div className="fixed bottom-0 right-0  rounded-full  bg-white border-green-500 border-4 m-3">
        <BiPhoneCall className="text-4xl m-1 text-green-500" />
      </div>
      <footer className="w-full bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex justify-between">
            <div>
              <p className="text-center text-gray-300">
                &copy; J Foods and Co. Pinched with ❤️. All rights reserved.
              </p>
            </div>
            <div className="flex justify-center ">
              <nav className="flex space-x-4">
                <a href="/offers" className="text-gray-300 hover:text-white">
                  Offers
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
    </>
  );
};

export default Footer;
