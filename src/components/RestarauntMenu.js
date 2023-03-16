import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../config";
import useRestaurant from "../hooks/useRestaurant";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import OfferSection from "./OfferSection";
import { RxDotFilled } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import OfferSlider from "./OfferSlider";

function RestaurantMenu() {
  let { id } = useParams();
  let restaurant = useRestaurant(id);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <div className="self-start min-w-[30%] border border-gray-200 rounded-lg m-2 bg-[#2E4F4F]">
          <div className="py-2 mx-4">
            <div className="py-4 sticky top-20 z-5 shadow-xl my-1 font-bold text-xl mb-3 bg-[#CBE4DE] text-[#2E4F4F] p-2 rounded-lg flex justify-center">
              <p>{restaurant.name}</p>
            </div>
            <img src={CDN_IMG_URL + restaurant.cloudinaryImageId} alt="img" />{" "}
            <h2 className="m-2 text-[#CBE4DE] text-sm">
              {restaurant.cuisines?.join(", ")}
            </h2>
            <hr />
            <ul
              className={
                "m-2 flex items-center justify-center bg-gray-200 rounded-lg text-sm font-semibold text-gray-700"
              }
            >
              <li className="flex items-center">
                <span className="p-1">{restaurant.avgRating}</span>
                <AiFillStar />
              </li>
              <RxDotFilled />
              {restaurant?.sla?.slaString !== "--" && (
                <>
                  <li>{restaurant?.sla?.slaString}</li>
                  <RxDotFilled />
                </>
              )}
              <li>{restaurant.costForTwoMsg}</li>
            </ul>
            <div className="p-2">
              <h2 className="my-2">
                {restaurant.labels.map(({ title, message }) => {
                  return (
                    message !== "null" && (
                      <div key={title}>
                        <h1 className="font-semibold text-[#CBE4DE]">
                          {title}
                        </h1>
                        <p className="bg-[#CBE4DE] border border-[#2C3333] p-2 rounded-lg">
                          {message}
                        </p>
                      </div>
                    )
                  );
                })}
              </h2>
              <hr />
            </div>
          </div>
        </div>
        <div className="py-2">
          <OfferSection restaurant={restaurant} />
          <OfferSlider restaurant={restaurant} />
          <MenuItem restaurant={restaurant} />
        </div>
      </div>
    </>
  );
}
export default RestaurantMenu;
//  writing-mode: vertical-lr;
