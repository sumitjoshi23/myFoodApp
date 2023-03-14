import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { MdContactSupport } from "react-icons/md";
import { GrContact } from "react-icons/gr";

const ButtonList = () => {
  let allButtons = [
    { title: "Home", icon: <AiOutlineHome />, to: "/" },
    { title: "About", icon: <MdContactSupport />, to: "/about" },
    { title: "Contact us", icon: <GrContact />, to: "/contact" },
    { title: "Cart", icon: <AiOutlineShoppingCart />, to: "/cart" },
  ];
  let renderedButtons = allButtons.map((button) => (
    <Link key={button.title} to={button.to}>
      <Button className="flex justify-center items-center hover:bg-[#0E8388] mx-2 px-5 py-2 text-xl bg-[#CBE4DE] border-4 rounded-full border-[#2C3333]">
        <span>{button.icon}</span>
        <span className="m-2">{button.title}</span>
      </Button>
    </Link>
  ));
  return renderedButtons;
};

export default ButtonList;
