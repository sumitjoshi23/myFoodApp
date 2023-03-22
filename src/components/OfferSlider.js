import React from "react";

const OfferSlider = () => {
  return (
    <div className="overflow-x-hidden text-[#E97171] font-semibold bg-[#000000] rounded-lg p-2 my-4 ">
      <div className="max-w-xs flex animate-marquee whitespace-nowrap">
        <br />
        <span className="font-semibold mx-4">💸Heavy discount💰</span>
        <span className="font-semibold mx-4 text-red-400">
          🎁FESTIVE GOODIES🤑
        </span>
        <span className="font-semibold mx-4">♨️FRESH FOOD♨️</span>
        <span className="font-semibold mx-4 text-red-400">
          ⏰QUICK SERVICE⏲️
        </span>
        <span className="font-semibold mx-4">
          🍃NATURE FRIENDLY PACKAGING🍃
        </span>
        <span className="font-semibold mx-4 text-red-400">
          🍽️HUGE VARIETY TO CURB YOUR CRAVINGS...😋
        </span>
      </div>
    </div>
  );
};

export default OfferSlider;
