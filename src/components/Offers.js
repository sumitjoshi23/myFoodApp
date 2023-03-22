import React, { useEffect, useState } from "react";
import { CDN_IMG_URL } from "../config";

const Offers = () => {
  const [offersList, setOffersList] = useState([]);
  async function getOffers() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/offers/payment?lat=28.705235&lng=77.05899&offset=0"
    );
    const json = await data.json();
    setOffersList(json.data.cards);
  }
  useEffect(() => {
    getOffers();
  }, []);

  const offers = offersList
    .filter((offer) => offer.data.type === "couponCardV2")
    .map((offer) => offer.data.data);

  const renderedOffers = offers.map((offer) => {
    return (
      <div
        className="border bg-gray-200 hover:bg-[#f6cece] duration-300 hover:scale-110 hover:shadow-[#a81010] border-gray-300 rounded-xl shadow-lg m-8 p-4 text-center"
        key={offer.couponCode}
      >
        <div className="flex m-4 items-center justify-center">
          <img
            className="w-14"
            src={CDN_IMG_URL + offer.logo}
            alt="offerLogo"
          />
          <p className="text-[#a81010] font-semibold text-xl m-4">
            {offer.couponCode}
          </p>
        </div>

        <p className="font-semibold text-[#E97171] m-4">{offer.title}</p>
        <p className="text-gray-500 m-4">{offer.description}</p>
        <p className="text-red-700 ">{offer.validTill}</p>
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-[#a81010]">
        Offers and Coupons
      </h1>
      <div className="grid grid-cols-3">{renderedOffers}</div>
    </div>
  );
};

export default Offers;
