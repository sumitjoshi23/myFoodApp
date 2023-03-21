import React from "react";
import { Outlet } from "react-router-dom";
import myPic from "../utils/images/myPic.jpg";

function About() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 rounded py-10">
      <Outlet />

      <img className="w-48 rounded-full mb-4" src={myPic} alt="MyPic" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Hello, I'm Sumit Joshi
      </h1>
      <p className="text-xl text-gray-600 mb-6"> Front End Web Developer</p>
      <div className="max-w-3xl">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I'm a passionate web developer who loves building beautiful,
          responsive user interfaces using various technologies including{" "}
          <span className="text-red-700 font-semibold">
            HTML, CSS, Javascript, React, Redux{" "}
            <span className="text-gray-700 font-normal">and</span> Tailwind
          </span>
          .
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I have a professional working experience of around{" "}
          <span className="text-red-700 font-semibold">4 years</span> and worked
          on a variety of web projects, from small websites to large-scale web
          applications. I also worked as a software tester and used tools like
          <span className="text-red-700 font-semibold"> Cucumber</span> and{" "}
          <span className="text-red-700 font-semibold">Selenium</span> in order
          to automate the web app. I have also worked in{" "}
          <span className="text-red-700 font-semibold">Java</span> to fix bugs
          and implementing required usecases. Later on I switched purely to
          front end and helped my organization in{" "}
          <span className="text-red-700 font-semibold">
            migrating the whole UI
          </span>{" "}
          and{" "}
          <span className="text-red-700 font-semibold">
            writing own components like Accordions, Buttons, Dropdowns, Routes,
            etc
          </span>{" "}
          using React JS.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I am{" "}
          <span className="text-red-700 font-semibold">
            well versed in giving training to new joiness
          </span>{" "}
          and handling teams as I was{" "}
          <span className="text-red-700 font-semibold">
            leading the testing team
          </span>{" "}
          in the previous organization before switching myself in front end. I
          also have great experience in client-handling as I{" "}
          <span className="text-red-700 font-semibold">
            often gave product demos to client
          </span>{" "}
          for the organization.
          <br />
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          On this particular website, I'have used a bunch of technologies
          including React, Redux, Tailwind.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-3 font-semibold">
          Key features in this website are listed below:
        </p>
        <ul className="ml-7 list-disc text-green-700 ">
          <li>Complete flow from Outlet listing to order getting placed</li>
          <li>Used React for better functionality and UI performance</li>
          <li>Used Tailwind as CSS library</li>
          <li>Used React-Router-DOM for routing</li>
          <li>Used Redux for data management</li>
          <li>
            Implemented oAuth to allow users to sign in and get a personalised
            touch
          </li>
          <li>A taste of traditional class-based components</li>
          <li>
            Used live data from a very popular food delivering app's API in
            India
          </li>
          <li>Added custom error page for incorrect urls</li>
          <li>
            Added Shimmer/ Skeleton effects to give real-time experience to the
            user and restrict his attention to the UI
          </li>
          <li>
            Implemented flow for Nested routing,{" "}
            <span className="text-gray-700">and many more...</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
