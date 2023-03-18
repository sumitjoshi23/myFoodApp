import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import {
  MdContactSupport,
  MdOutlineConnectWithoutContact,
  MdOutlineLocalOffer,
} from "react-icons/md";
import { useSelector } from "react-redux";

const ButtonList = () => {
  let items = useSelector((store) => store.cart.items);

  let allButtons = [
    { title: "Home", icon: <AiOutlineHome />, to: "/" },
    {
      title: "Offers",
      icon: <MdOutlineLocalOffer />,
      to: "/offers",
    },
    {
      title: "Contact",
      icon: <MdOutlineConnectWithoutContact />,
      to: "/contact",
    },
    { title: "Cart", icon: <AiOutlineShoppingCart />, to: "/cart", items },
    { title: "About", icon: <MdContactSupport />, to: "/about" },
  ];
  let renderedButtons = allButtons.map((button) => (
    <Link key={button.title} to={button.to}>
      <Button>
        <span>{button.icon}</span>
        {button.items && <span className="pl-1">{button.items.length}</span>}
        <span className="m-2">{button.title}</span>
      </Button>
    </Link>
  ));
  return renderedButtons;
};

export default ButtonList;
