import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';
import {
  MdOutlineConnectWithoutContact,
  MdOutlineLocalOffer,
} from 'react-icons/md';
import { IoMdInformationCircleOutline } from 'react-icons/io';

import { useSelector } from 'react-redux';

const NavbarLinksSection = () => {
  let items = useSelector((store) => store.cart.items);
  const totalItemsInCart = items.reduce(
    (acc, curr) => (acc += curr.quantity),
    0
  );

  let navbarLinks = [
    { title: 'Home', icon: <AiOutlineHome />, to: '/' },
    {
      title: 'Offers',
      icon: <MdOutlineLocalOffer />,
      to: '/offers',
    },
    {
      title: 'Contact Us',
      icon: <MdOutlineConnectWithoutContact />,
      to: '/contact',
    },
    {
      title: 'Cart',
      icon: <AiOutlineShoppingCart />,
      to: '/cart',
      totalItemsInCart,
    },
    { title: 'About', icon: <IoMdInformationCircleOutline />, to: '/about' },
  ];
  let renderedNavbarLinks = navbarLinks.map((link) => (
    <Link
      key={link.title}
      to={link.to}
      className="flex mx-3 text-xl items-center text-white hover:scale-110 duration-200 hover:text-black"
    >
      <span className="m-1 text-3xl">{link.icon}</span>
      <span className="m-1">{link.title}</span>
      {link.totalItemsInCart > 0 && <sup>{link.totalItemsInCart}</sup>}
    </Link>
  ));
  return renderedNavbarLinks;
};

export default NavbarLinksSection;
