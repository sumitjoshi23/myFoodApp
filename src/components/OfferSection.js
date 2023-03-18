import React from "react";
import { CDN_IMG_URL } from "../config";

const OfferSection = ({ restaurant }) => {
  const { offers } =
    restaurant?.cards[1]?.card?.card?.gridElements.infoWithStyle ?? {};
  return (
    <div className="p-3 pt-4 mt-6 bg-[#2E4F4F] text-center rounded-lg">
      <p className="mb-5 font-semibold text-2xl text-[#CBE4DE]">
        💸**Coupons and offers**💰
      </p>
      <div className="bg-[#0E8388] rounded-lg font-semibold text-2xl flex justify-center p-2 m-2">
        {offers.map(({ info }) => (
          <div
            key={info.couponCode}
            className="hover:scale-105 duration-300 m-1 h-28"
          >
            <div className="flex items-center h-full bg-[#CBE4DE] border border-[#2C3333] rounded-lg ">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 p-1"
                  src={CDN_IMG_URL + info.offerLogo}
                  alt="offerLogo"
                />
                <p className="text-xs text-[#A84448]">{info.header}</p>
              </div>
              <div
                className="text-xs hover:scale-110 duration-300 bg-[#BBD6B8] border border-gray-500 rounded-full m-1 px-1 py-2 "
                style={{ writingMode: "vertical-lr" }}
              >
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
