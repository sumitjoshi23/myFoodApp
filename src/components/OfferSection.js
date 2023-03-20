import React from "react";
import { CDN_IMG_URL } from "../config";

const OfferSection = ({ restaurant }) => {
  const { offers } =
    restaurant?.cards[1]?.card?.card?.gridElements.infoWithStyle ?? {};
  return (
    <div className="p-3 pt-4 mt-6 bg-[#e5f0ee] text-center border border-gray-300 rounded-lg ">
      <p className="mb-5 font-semibold text-2xl ">💸**Coupons and offers**💰</p>
      <div className="font-semibold  flex justify-center p-2 m-2">
        {offers.map(({ info }) => (
          <div
            key={info.couponCode}
            className="hover:scale-105 duration-300 m-1 h-28 w-36"
          >
            <div className="flex flex-col items-center justify-center p-4 h-full w-full bg-[#b6d5ce] rounded-lg ">
              <img
                className="w-16 flex p-2 items-center"
                src={CDN_IMG_URL + info.offerLogo}
                alt="offerLogo"
              />
              <p className="text-xs text-[#A84448]">{info.header}</p>

              <div className="text-xs text-black hover:scale-110 duration-300 bg-[#BBD6B8] border border-gray-400 rounded-full m-1 px-1 py-2 ">
                {info.couponCode.substring(4)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
