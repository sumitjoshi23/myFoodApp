import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { clearCart } from "../store";
import { addItem, removeItem } from "../store";
import fallBackItemPic from "../utils/images/fallBackItemPic.jpeg";
import { CDN_IMG_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";
import { fallbackItemPrice } from "../utils/helper";
import { BiArrowBack } from "react-icons/bi";

const Cart = () => {
  const nav = useNavigate();

  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const cartTotal = items.reduce(
    (acc, curr) =>
      (acc += ((curr.price || fallbackItemPrice) * curr.quantity) / 100),
    0
  );

  const renderedItems = items.map((item, index) => (
    <div
      className="hover:bg-[#CBE4DE] duration-500 hover:scale-105 hover:shadow-[#2E4F4F] rounded-lg m-4 p-4 shadow-lg border "
      key={index}
    >
      <div className="grid grid-cols-5 justify-between items-center">
        <img
          className="rounded-lg"
          src={item.imageId ? CDN_IMG_URL + item?.imageId : fallBackItemPic}
          alt="Item Pic"
        />
        <div className="font-semibold text-center ml-2">{item.name}</div>
        <div className="font-semibold text-center ml-2">
          Qty- {item.quantity}
        </div>
        <div className="text-center text-gray-400 max-h-36 overflow-hidden">
          {item.description}
        </div>
        <div className="font-semibold text-center">
          <span>Rs </span>
          {item.price ? item.price / 100 : fallbackItemPrice / 100}
          /-
        </div>
        <div className="flex items-center">
          <Button
            className=" bg-green-200 font-bold h-8 w-8 pb-1 m-2 rounded-full"
            onClick={() => dispatch(addItem(item))}
          >
            +
          </Button>
          {
            <Button
              className="bg-red-200 font-bold h-8 w-8 pb-1 rounded-full hover:bg-red-800 "
              onClick={() => dispatch(removeItem(item))}
            >
              -
            </Button>
          }
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8 text-[#2E4F4F] ">Cart</h1>
        {cartTotal !== 0 && (
          <div className="bg-gray-100 rounded-xl p-5">
            <div className="flex justify-center text-[#A84448] text-2xl font-bold hover:scale-105 mb-4 ">
              Cart total : Rs {cartTotal}/-
            </div>
            <div className="flex">
              <Link to="/orderDetails">
                <Button className="m-2 px-5">Place Order</Button>
              </Link>
              <Button
                className="m-2 p-5 hover:bg-red-800 "
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
        {items.length ? (
          <>
            <div className="grid grid-cols-2">{renderedItems}</div>
            <div className="sticky bottom-2 self-end">
              <Button
                onClick={() => nav(-1)}
                className="hover:scale-110 hover:bg-green-700 text-xs text-white rounded-full bg-green-800 "
              >
                <BiArrowBack className="text-xl mr-1" /> Go back
              </Button>
            </div>
          </>
        ) : (
          <div className="absolute top-72 font-bold text-2xl text-[#0E8388]">
            Empty cart 🙃 Visit restaurants and choose your favourite cuisine
            !!!
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
