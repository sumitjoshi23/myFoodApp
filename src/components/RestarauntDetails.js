import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../config";
import useRestaurant from "../hooks/useRestaurant";
import Shimmer from "./Shimmer";
import OfferSection from "./OfferSection";
import { RxDotFilled } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
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
    sla,
    labels,
  } = restaurant?.cards[0]?.card?.card?.info ?? {};

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="sticky top-16 z-10 text-3xl font-bold mb-8 text-[#CBE4DE] mt-8 py-4 bg-[#2E4F4F] rounded-lg flex justify-center">
        <p>{name}</p>
      </div>
      <div className="flex my-6">
        <div className="text-center self-start min-w-[30%] rounded-lg mr-4 border border-gray-200 bg-[#e5f0ee]">
          <div className="m-4">
            <img src={CDN_IMG_URL + cloudinaryImageId} alt="img" />
            <h2 className="my-6 font-bold text-lg">{cuisines?.join(", ")}</h2>
            <ul
              className={
                "my-6 flex items-center justify-center bg-gray-300 rounded-lg font-semibold"
              }
            >
              <li className="flex items-center">
                <span className="p-1">{avgRating}</span>
                <AiFillStar />
              </li>
              <RxDotFilled />
              {sla?.slaString !== "--" && (
                <>
                  <li>{sla?.slaString}</li>
                  <RxDotFilled />
                </>
              )}
              <li>{costForTwoMessage}</li>
            </ul>
            <div className="my-6">
              {labels.map(({ title, message }) => {
                return (
                  message !== "null" && (
                    <div className="my-6" key={title}>
                      <h1 className="underline underline-offset-4 font-semibold">
                        {title}
                      </h1>
                      <p className="mt-2">{message}</p>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
        <div className="ml-4">
          <OfferSlider />
          <OfferSection restaurant={restaurant} />
          <RestaurantMenuList
            menuDataSet={
              restaurant.cards[2].groupedCard.cardGroupMap.REGULAR.cards
            }
          />
        </div>
      </div>
    </>
  );
}
export default RestaurantDetails;
