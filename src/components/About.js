import React from "react";
import outlet1 from "../utils/images/outlet1.jpg";
import outlet2 from "../utils/images/outlet2.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-[#2E4F4F]">About Us</h1>
      <p className="max-w-lg text-center text-gray-700">
        Welcome to our food ordering app! We're dedicated to making it easy and
        convenient for you to order delicious food from your favorite local
        restaurants. With just a few taps on your phone, you can browse menus,
        customize your order, and have your meal delivered straight to your
        door. Whether you're craving pizza, sushi, burgers, or something else
        entirely, our app has you covered. Plus, we offer fast delivery,
        real-time order tracking, and easy payment options, so you can sit back
        and relax while we take care of the rest.
        <br /> So why wait? Start using our web app today and start enjoying
        great food without the hassle!
      </p>
      <div className="mt-8 flex flex-wrap justify-center">
        <div className="hover:scale-110 duration-300 max-w-xs mx-4 my-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-56 object-cover object-center"
            src={outlet1}
            alt="team member"
          />
          <div className="py-4 px-6">
            <h2 className="text-lg font-bold mb-2">Delhi Outlet</h2>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vel gravida lorem. Nunc quis lacus eu leo efficitur facilisis a
              nec lorem.
            </p>
          </div>
        </div>
        <div className="hover:scale-110 duration-300 max-w-xs mx-4 my-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-56" src={outlet2} alt="team member" />
          <div className="py-4 px-6">
            <h2 className="text-lg font-bold mb-2">Bangalore Outlet</h2>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vel gravida lorem. Nunc quis lacus eu leo efficitur facilisis a
              nec lorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
