import React from 'react';
import { Outlet } from 'react-router-dom';
import myPic from '../utils/images/myPic.jpg';

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
          I am a dedicated and results-driven Frontend Developer with around{' '}
          <span className="text-[#216e71] font-semibold">6 years</span> of
          experience in crafting high-quality, user-centric web applications.
          Proficient in modern frontend technologies including{' '}
          <span className="text-[#216e71] font-semibold">
            HTML, CSS, Tailwind, PrimeReact, Javascript, TypeScript, ReactJS,
            Redux, NextJS <span className="text-gray-700 font-normal">and</span>{' '}
            Hasura-GraphQL
          </span>
          .
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Throughout my career, I have contributed to a diverse range of
          projects, from small-scale websites to complex enterprise-level
          applications. Notably, I played a key role in developing{' '}
          <span className="text-[#216e71] font-semibold">
            banking web products for clients in the U.S. and Canada.
          </span>{' '}
          collaborating closely with cross-functional teams to deliver secure
          and performant solutions.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Initially starting as a Software Tester, I gained hands-on experience
          with automation tools like{' '}
          <span className="text-[#216e71] font-semibold"> Cucumber</span> and{' '}
          <span className="text-[#216e71] font-semibold">Selenium</span>, and
          contributed to bug fixes using{' '}
          <span className="text-[#1e6669] font-semibold">Java</span>.
          Transitioning to frontend development, I led initiatives to{' '}
          <span className="text-[#216e71] font-semibold">
            migrate legacy UI components to React, developing reusable
            components such as accordions, buttons, dropdowns, and routing
            mechanisms
          </span>
          , thereby enhancing code maintainability and user experience.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I am{' '}
          <span className="text-[#216e71] font-semibold">
            well versed in giving training to new joiness
          </span>{' '}
          and handling teams as I was{' '}
          <span className="text-[#216e71] font-semibold">
            leading the testing team
          </span>{' '}
          in the previous organization before switching myself in front end. I
          also have great experience in client-handling as I{' '}
          <span className="text-[#216e71] font-semibold">
            often gave product demos to client
          </span>{' '}
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
          <li>A pinch of lazy loading technique to optimize bundle size</li>
          <li>
            Added Shimmer/ Skeleton effects to give real-time experience to the
            user, restrict his attention to the UI and avoid the perception of a
            frozen or unresponsive interface.
          </li>
          <li>
            Used live data from a very popular food delivering app's API in
            India
          </li>
          <li>Added custom error page for incorrect urls</li>
          <li>
            Implemented flow for Nested routing,{' '}
            <span className="text-gray-700">and many more...</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
