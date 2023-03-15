import React from "react";
import { CDN_IMG_URL } from "../config";

const OfferSection = ({ restaurant }) => {
  return (
    <div className="bg-[#2E4F4F] p-4 mb-4 rounded-lg">
      <span className="font-semibold text-[#CBE4DE]">
        💸**Coupons and offers**💰
      </span>
      <div className="bg-[#0E8388] rounded-lg flex justify-center p-6 m-2">
        {restaurant.offerMeta.map(({ header, coupon_code, offer_logo }) => (
          <div key={coupon_code} className="m-1 h-28">
            <div className="flex items-center h-full bg-[#CBE4DE] border border-[#2C3333] rounded-lg ">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 p-1"
                  src={CDN_IMG_URL + offer_logo}
                  alt="offerLogo"
                />
                <p className="text-xs text-[#A84448] font-semibold">{header}</p>
              </div>
              <div
                className="text-xs bg-[#BBD6B8] border border-gray-500 rounded-full m-1 p-1 "
                style={{ writingMode: "vertical-lr" }}
              >
                {coupon_code}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
