import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../config";
import useRestaurant from "../hooks/useRestaurant";
import RestaurantDetailsShimmer from "./shimmer/RestaurantDetailsShimmer";
import OfferSection from "./OfferSection";
import { RxDotFilled } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import { AiFillClockCircle } from "react-icons/ai";

import OfferSlider from "./OfferSlider";
import RestaurantMenuList from "./RestaurantMenuList";

function RestaurantDetails() {
  let { id } = useParams();
  let restaurant = useRestaurant(id);
  const {
    cuisines,
    name,
    avgRating,
    cloudinaryImageId,
    costForTwoMessage,
    totalRatingsString,
    veg,
    sla,
    labels,
  } = restaurant?.cards[0]?.card?.card?.info ?? {};

  return !restaurant ? (
    <RestaurantDetailsShimmer />
  ) : (
    <>
      <div className="z-10 text-3xl font-bold mb-8 text-white py-4 mt-4 bg-[#fb6c3c] rounded-lg flex justify-center">
        {veg ? (
          <GiThreeLeaves className="text-green-600 text-center text-2xl m-1" />
        ) : (
          ""
        )}
        {name}
        {veg ? (
          <GiThreeLeaves className="text-green-600 text-center text-2xl m-1" />
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-[#feeee9]">
        <div className="p-2 rounded ml-8 m-2 border border-gray-300">
          <img
            className="w-72 rounded"
            src={CDN_IMG_URL + cloudinaryImageId}
            alt="img"
          />
        </div>
        <div className="flex flex-col items-center my-2 text-center">
          <h2 className="my-4 font-bold text-lg">{cuisines?.join(", ")}</h2>
          <div>
            {sla?.lastMileTravelString && (
              <p className="font-semibold mx-1 inline">
                <AiFillClockCircle className="inline text-green-800 text-2xl" />
                {sla?.slaString}
              </p>
            )}
            |
            {sla?.lastMileTravelString && (
              <p className="inline font-semibold mx-1">
                <FaMotorcycle className="inline text-red-800 text-2xl" />
                {sla?.lastMileTravelString}
              </p>
            )}{" "}
            {veg ? (
              <GiThreeLeaves className="text-green-600 mx-auto text-center text-2xl m-1" />
            ) : (
              ""
            )}
          </div>
          <ul
            className={
              "my-4 p-1 flex items-center justify-between bg-[#f6bead] rounded-lg font-semibold"
            }
          >
            <li>
              <span className="p-1">{avgRating}</span>
              <AiFillStar className="inline  mr-2" />
            </li>
            {sla?.slaString !== "--" && <li>{totalRatingsString}</li>}
            <li>
              <RxDotFilled className="inline mr-1" />
              {costForTwoMessage}
            </li>
          </ul>
          <div className="m-auto w-[80%]">
            {labels.map(({ title, message }) => {
              return (
                message !== "null" && (
                  <div className="my-4" key={title}>
                    <h1 className="underline underline-offset-4 font-semibold">
                      {title}
                    </h1>
                    <p>{message}</p>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
      <OfferSlider />
      <OfferSection restaurant={restaurant} />
      <RestaurantMenuList
        menuDataSet={restaurant.cards[2].groupedCard.cardGroupMap.REGULAR.cards}
      />
    </>
  );
}
export default RestaurantDetails;
