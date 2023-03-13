import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { MdContactSupport } from "react-icons/md";
import { GrContact } from "react-icons/gr";

const ButtonList = () => {
  let allButtons = [
    { icon: <AiOutlineHome />, to: "/" },
    { icon: <MdContactSupport />, to: "/about" },
    { icon: <GrContact />, to: "/contact" },
    { icon: <AiOutlineShoppingCart />, to: "/cart" },
  ];
  let renderedButtons = allButtons.map((button) => (
    <Link key={button.to} to={button.to}>
      <Button className=" hover:bg-[#0E8388] mx-5 px-5 py-2 text-2xl bg-[#CBE4DE] border-4 rounded-full border-[#2C3333]">
        {button.icon}
      </Button>
    </Link>
  ));
  return <div>{renderedButtons}</div>;
};

export default ButtonList;
