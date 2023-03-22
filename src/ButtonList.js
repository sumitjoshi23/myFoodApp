import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import {
  MdContactSupport,
  MdOutlineConnectWithoutContact,
  MdOutlineLocalOffer,
} from "react-icons/md";
import { useSelector } from "react-redux";

const ButtonList = () => {
  let items = useSelector((store) => store.cart.items);
  const totalItemsInCart = items.reduce(
    (acc, curr) => (acc += curr.quantity),
    0
  );

  let allButtons = [
    { title: "Home", icon: <AiOutlineHome />, to: "/" },
    {
      title: "Offers",
      icon: <MdOutlineLocalOffer />,
      to: "/offers",
    },
    {
      title: "Contact Us",
      icon: <MdOutlineConnectWithoutContact />,
      to: "/contact",
    },
    {
      title: "Cart",
      icon: <AiOutlineShoppingCart />,
      to: "/cart",
      totalItemsInCart,
    },
    { title: "About", icon: <MdContactSupport />, to: "/about" },
  ];
  let renderedButtons = allButtons.map((button) => (
    <Link
      key={button.title}
      to={button.to}
      className="flex mx-6 text-xl items-center text-white hover:scale-110 duration-200 hover:text-pink-200"
    >
      <span className="m-1 text-4xl">{button.icon}</span>
      {button.totalItemsInCart && (
        <span className="mr-1 font-semibold text-green-400">
          {button.totalItemsInCart}
        </span>
      )}
      <span className="m-1">{button.title}</span>
    </Link>
  ));
  return renderedButtons;
};

export default ButtonList;
