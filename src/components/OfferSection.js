import React from 'react';
import { CDN_IMG_URL } from '../config';

const OfferSection = ({ restaurant }) => {
  const { offers } =
    restaurant?.cards[3]?.card?.card?.gridElements.infoWithStyle ?? {};
  return (
    <div className="bg-[#feeee9] text-center border border-gray-200 rounded-lg ">
      <p className="my-5 font-semibold text-2xl ">💸**Coupons and offers**💰</p>
      <div className="font-semibold  flex justify-center p-3 m-2">
        {offers.map(({ info }) => (
          <div
            key={info.couponCode}
            className="hover:scale-105 duration-300 w-48"
          >
            <div className="flex flex-col items-center justify-center p-4 m-4 bg-[#ffac92] rounded-lg min-h-[12rem]">
              <img
                className="w-16 flex p-2 items-center"
                src={CDN_IMG_URL + info.offerLogo}
                alt="offerLogo"
              />
              <p className="text-xs text-[#451414]">{info.header}</p>
              {info.couponCode && (
                <div className="text-xs hover:scale-110 duration-300 bg-[#feeee9] border border-gray-400 rounded-full m-1 px-8 py-2 ">
                  {info.couponCode}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
