import React from "react";
import myPic from "../utils/images/myPic.jpg";

function About() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
      <img className="w-48 rounded-full mb-4" src={myPic} alt="MyPic" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Hello, I'm Sumit Joshi
      </h1>
      <p className="text-xl text-gray-600 mb-6"> Front End Web Developer</p>
      <div className="max-w-3xl text-center">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I'm a passionate web developer who loves building beautiful,
          responsive user interfaces using various frameworks like React JS,
          Tailwind CSS etc. I have experience working on a variety of web
          projects, from small websites to large-scale web applications. I enjoy
          exploring new technologies and learning new skills to stay up-to-date
          with the latest trends in web development.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          On this website, I'have used a bunch of technologies including React,
          Redux, Tailwind.
          <br /> Key features in this website are listed below:
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6  font-semibold">
          Key features in this website are listed below:
        </p>
        <ul className="text-green-700 ">
          <li>Complete flow from Outlet listing to order getting placed</li>
          <li>Used React for better functionality and UI performance</li>
          <li>Used Redux for data management</li>
          <li>
            Implemented oAuth to allow users to sign in and get a personalised
            touch
          </li>
          <li>Used live data from Swiggy API</li>
          <li>Added custom error page for incorrect urls</li>
          <li>
            Added Shimmer Effects in restaurant listing and menu listing page
          </li>
          <li> Created Nested routing</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
