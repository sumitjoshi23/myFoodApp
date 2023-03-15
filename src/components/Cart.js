import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { clearCart } from "../store";
import { addItem, removeItem } from "../store";
import fallBackItemPic from "../utils/images/fallBackItemPic.jpeg";
import { CDN_IMG_URL } from "../config";
import store from "../store";
const Cart = () => {
  const dispatch = useDispatch();
  let items = useSelector((store) => store.cart.items);
  let renderedItems = Object.values(items).map((item) => (
    <div
      className="hover:bg-[#CBE4DE] hover:duration-500 hover:scale-105 hover:shadow-[#2E4F4F] rounded-lg m-8 p-4 shadow-lg border border-gray-200 flex"
      key={item.id}
    >
      <div className="w-full flex justify-between items-center">
        <div className="w-1/6 ">
          <img
            className="rounded-lg"
            src={
              item.cloudinaryImageId
                ? CDN_IMG_URL + item?.cloudinaryImageId
                : fallBackItemPic
            }
            alt="Item Pic"
          />
        </div>
        <div className="font-semibold">{item.name}</div>
        <div className="font-semibold">{item.description}</div>
        <div className="float-right text-sm">
          <span>Rs </span>
          {item.price
            ? item.price / 100
            : item?.variantsV2?.variant_groups[0]?.variations[0]?.price}
          /-
        </div>
        <div className="float-right">
          <Button
            className=" bg-green-200 border font-bold border-green-900 py-1 px-3 rounded-full m-1"
            onClick={() => dispatch(addItem(item))}
          >
            +
          </Button>
          {
            <Button
              className="bg-red-200 border font-bold border-red-900 py-1 px-3 rounded-full m-1"
              onClick={() => dispatch(removeItem(item))}
            >
              -
            </Button>
          }
        </div>
      </div>
    </div>
  ));
  console.log(store.getState());
  const cartTotal = items.reduce((acc, curr) => (acc += curr.price / 100), 0);

  return (
    <>
      <div className="flex justify-between m-8 px-4  bg-[#CBE4DE] items-center rounded-full border border-gray-300">
        <h1 className="text-2xl font-bold">Cart</h1>
        {cartTotal !== 0 && (
          <div className="flex text-[#A84448] text-2xl font-bold justify-between hover:scale-105 hover:shadow-lg transition-transform:  ">
            <p className="mx-3">Cart total :</p>
            <p>Rs {cartTotal}/-</p>
          </div>
        )}
        {items.length !== 0 && (
          <Button
            className="bg-red-200 font-semibold flex justify-center items-center hover:duration-500 hover:bg-[#0E8388] hover:text-white m-2 px-5 text-xl border-2 rounded-full border-red-900 "
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
        )}
      </div>

      {items.length ? (
        renderedItems
      ) : (
        <div className="font-bold text-3xl text-[#0E8388] h-96 flex justify-center items-center">
          <p className="">Empty cart 🙃 Start adding items to your cart</p>
        </div>
      )}
    </>
  );
};

export default Cart;
