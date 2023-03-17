import React from "react";

const OfferSlider = () => {
  return (
    <div className="overflow-x-hidden text-[#CBE4DE] font-semibold bg-[#2E4F4F] rounded-lg p-4 mb-4 ">
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
