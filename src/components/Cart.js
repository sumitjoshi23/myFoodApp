import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { clearCart } from "../store";
import { addItem, removeItem } from "../store";
import fallBackItemPic from "../utils/images/fallBackItemPic.jpeg";
import { CDN_IMG_URL } from "../config";
import { Link } from "react-router-dom";
import { fallbackItemPrice } from "../utils/helper";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const cartTotal = items.reduce(
    (acc, curr) => (acc += (curr.price || fallbackItemPrice) / 100),
    0
  );

  const renderedItems = Object.values(items).map((item, index) => (
    <div
      className="hover:bg-[#CBE4DE] hover:duration-500 hover:scale-105 hover:shadow-[#2E4F4F] rounded-lg m-8 p-4 shadow-lg border flex"
      key={index}
    >
      <div className="w-full grid grid-cols-5 justify-between items-center">
        <img
          className="rounded-lg"
          src={item.imageId ? CDN_IMG_URL + item?.imageId : fallBackItemPic}
          alt="Item Pic"
        />
        <div className="font-semibold text-center">{item.name}</div>
        <div className="text-center text-gray-400">{item.description}</div>
        <div className="font-semibold text-center">
          <span>Rs </span>
          {item.price ? item.price / 100 : fallbackItemPrice / 100}
          /-
        </div>
        <div className="float-right flex items-center mx-auto">
          <Button
            className=" bg-green-200 border font-bold h-8 w-8 pb-1 px-0 rounded-full"
            onClick={() => dispatch(addItem(item))}
          >
            +
          </Button>
          {
            <Button
              className="bg-red-200 border font-bold h-8 w-8 pb-1 border-red-900 px-0 rounded-full hover:bg-red-800 "
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
        <h1 className="text-3xl font-bold mb-8 text-[#2E4F4F]">Cart</h1>
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
                className="m-2 p-5 border-red-900 hover:bg-red-800 "
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
        {items.length ? (
          renderedItems
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
