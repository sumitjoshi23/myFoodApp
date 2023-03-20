import React from "react";
import { useDispatch, useSelector } from "react-redux";
import whatsAppLogo from "../utils/images/whatsAppLogo.png";
import facebookLogo from "../utils/images/facebookLogo.png";
import instagramLogo from "../utils/images/instagramLogo.png";
import twitterLogo from "../utils/images/twitterLogo.png";
import telegramLogo from "../utils/images/telegramLogo.png";
import quoraLogo from "../utils/images/quoraLogo.png";
import Button from "../Button";
import { Link } from "react-router-dom";
import { clearCart } from "../store";
import { AiOutlineShoppingCart } from "react-icons/ai";

const FixedSideBars = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const { profile } = useSelector((store) => store.signedInUser);

  const leftSideBar = (
    <div
      className="fixed top-[50%] translate-y-[-40%] text-white text-center font-semibold bg-[#2E4F4F] pr-1 pl-2 py-2 rounded rotate-180 hover:scale-125 duration-300"
      style={{
        writingMode: "vertical-rl",
      }}
    >
      <i>
        {profile ? (
          <>
            Currently logged in as{" "}
            <span className="text-red-400 font-extrabold">{profile.name}</span>
          </>
        ) : (
          <>
            <span className="not-italic">🙃</span> Delicious stuff ... Order
            quickly <span className="not-italic">🙃</span>
          </>
        )}
      </i>
    </div>
  );
  const rightSideBar = (
    <div className="fixed flex flex-col top-[50%] right-0 translate-y-[-40%] font-semibold bg-[#2E4F4F] p-2 rounded hover:scale-125 duration-300">
      <a
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 duration-300 my-1 py-1"
        href="https://www.facebook.com/sumit.joshi.9469545/"
      >
        <img
          src={facebookLogo}
          alt="facebookLogo"
          className="w-8 rounded-xl text-green-500"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 duration-300 my-1 py-1"
        href="https://www.instagram.com/sumitjoshi420/"
      >
        <img
          src={instagramLogo}
          alt="instagramLogo"
          className="w-8 rounded-xl text-green-500"
        />
      </a>
      <a
        className="hover:scale-125 duration-300 my-1 py-1"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/"
      >
        <img
          src={twitterLogo}
          alt="twitterLogo"
          className="w-8 rounded-xl text-green-500"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 duration-300  my-1 py-1"
        href="https://telegram.com/"
      >
        <img
          src={telegramLogo}
          alt="telegramLogo"
          className="w-8 rounded-xl text-green-500"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 duration-300 my-1 py-1"
        href="https://quora.com/"
      >
        <img
          alt="quoraLogo"
          src={quoraLogo}
          className="w-8 rounded-xl text-green-500"
        />
      </a>
    </div>
  );

  const bottomWhatsAppLink = (
    <div className="fixed bottom-0 right-0 hover:scale-125 duration-300 m-3">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://web.whatsapp.com/send?phone=918285049037"
      >
        <img
          src={whatsAppLogo}
          alt="whatsappLogo"
          className="w-14 rounded-lg text-green-500"
        />
      </a>
    </div>
  );
  const bottomCartButtons = (
    <div className="px-0 fixed bottom-2 right-44 opacity-70 hover:opacity-100">
      {items.length !== 0 && (
        <div className="rounded-full flex ">
          <Link to="/cart">
            <Button className="hover:scale-110 hover:bg-green-700 border-none h-10 text-xs mx-0 px-0 rounded-l-full text-white rounded-lg bg-green-800 ">
              {items.length} Item(s) in{" "}
              <AiOutlineShoppingCart className="m-1 text-4xl" /> !! proceed to
              pay
            </Button>
          </Link>

          <Button
            onClick={() => {
              dispatch(clearCart());
            }}
            className="hover:scale-110 hover:bg-red-700 border-none text-xs h-10 mx-0 px-0 rounded-r-full text-white  rounded-lg bg-red-800 "
          >
            Clear cart
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {leftSideBar}
      {rightSideBar}
      {bottomWhatsAppLink}
      {bottomCartButtons}
    </>
  );
};

export default FixedSideBars;
