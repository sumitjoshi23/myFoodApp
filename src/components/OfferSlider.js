import React from "react";

const OfferSlider = ({ restaurant }) => {
  return (
    <div className="sticky overflow-x-hidden  top-20 z-10 text-[#CBE4DE] font-semibold p-3 bg-[#2E4F4F] rounded-lg">
      <div className="max-w-xs flex animate-marquee whitespace-nowrap">
        <br />
        <span className="font-semibold mx-4">💸Heavy discount💰</span>
        <span className="font-semibold mx-4 text-red-400">
          🎁FESTIVE GOODIES🤑
        </span>
        <span className="font-semibold mx-4">
          🍽️ {Object.values(restaurant.menu.items).length} DISHES TO CURB YOUR
          CRAVINGS...😋
        </span>
        <span className="font-semibold mx-4 text-red-400">
          ⏰QUICK SERVICE⏲️
        </span>
        <span className="font-semibold mx-4">♨️FRESH FOOD♨️</span>
        <span className="font-semibold mx-4 text-red-400">
          🍃NATURE FRIENDLY PACKAGING🍃
        </span>
      </div>
    </div>
  );
};

export default OfferSlider;
