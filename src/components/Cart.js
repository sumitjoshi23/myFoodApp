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
  const totalQuantity = items.reduce((acc, curr) => (acc += curr.quantity), 0);

  const renderedItems = items.map((item, index) => (
    <div
      className="hover:bg-[#f3d2d2] duration-500 hover:scale-105 hover:shadow-[#a81010] rounded-lg my-4 p-4 shadow-lg border "
      key={index}
    >
      <div className="grid grid-cols-8 justify-between items-center">
        <img
          className="rounded-lg m-2"
          src={item.imageId ? CDN_IMG_URL + item?.imageId : fallBackItemPic}
          alt="Item Pic"
        />
        <div className="font-semibold text-center ml-4 mr-2">{item.name}</div>
        <div className="m-2 col-span-3 text-center text-gray-600 max-h-36 overflow-hidden">
          {item?.description}
        </div>
        <div className="m-2 font-semibold text-center">
          <span>Rs </span>
          {item.price ? item.price / 100 : fallbackItemPrice / 100}
          /-
        </div>
        <div className="font-semibold text-center m-2">
          Qty-{" "}
          <span className="text-red-800 font-extrabold text-lg">
            {item.quantity}
          </span>
        </div>
        <div className="font-semibold flex items-center justify-between text-white m-5 hover:text-white text-xl hover:scale-125 rounded-full duration-500 h-6 p-5 hover:bg-[#681212] bg-[#a81010]">
          <button
            className="hover:scale-125 duration-300 p-0 m-0"
            onClick={() => dispatch(removeItem(item))}
          >
            -
          </button>
          <button
            className="hover:scale-125 duration-300 p-0 m-0"
            onClick={() => dispatch(addItem(item))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8 text-[#a81010] ">Cart</h1>
        {cartTotal !== 0 && (
          <>
            <div className="bg-[#fde3e3] rounded-lg px-28 py-8 mb-4 text-center shadow-xl">
              <div className="font-bold text-xl text-gray-700 mb-2">
                Summary:
              </div>{" "}
              <div className="flex flex-col items-center flex-wrap justify-center">
                <div className="font-semibold text-gray-700 mb-2">
                  Total number of items: {totalQuantity}
                </div>
                <div className="text-end font-semibold text-gray-700 mb-2">
                  Total Payable: {cartTotal}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[#A84448] text-2xl font-bold mb-4 ">
              <div className="flex items-center">
                <Link to="/orderDetails">
                  <Button className="hover:bg-[#681212] bg-[#a81010] hover:scale-110 duration-300 mx-2 text-white">
                    Place Order
                  </Button>
                </Link>
                <Button
                  className="m-2 p-5 hover:bg-gray-700 hover:scale-110 duration-300 mx-2 bg-gray-500 text-white"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </Button>
              </div>
            </div>{" "}
          </>
        )}
        {items.length ? (
          <>
            <div className="flex flex-wrap">{renderedItems}</div>
            <div className="sticky bottom-2 self-end">
              <Button
                onClick={() => nav(-1)}
                className="hover:scale-110 hover:bg-green-700 px-8 text-white text-xs rounded-full h-12 bg-green-800"
              >
                <BiArrowBack className="text-xl mr-1" /> Go back
              </Button>
            </div>
          </>
        ) : (
          <div className="absolute top-72 font-bold text-2xl text-[#E97171]">
            Empty cart 🙃 Visit restaurants and choose your favourite cuisine
            !!!
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
