import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../config";
import useRestaurant from "../hooks/useRestaurant";
import Shimmer from "./Shimmer";
import fallBackItemPic from "../utils/images/fallBackItemPic.jpeg";
function RestaurantMenu() {
  let { id } = useParams();
  let restaurant = useRestaurant(id);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <img
        className="w-1/4  py-10"
        src={CDN_IMG_URL + restaurant.cloudinaryImageId}
        alt="img"
      />
      <div className="flex">
        <div>
          <ul className="flex flex-wrap">
            {Object.values(restaurant.menu.items).map((item) => (
              <li
                className="w-full m-8 shadow-lg border border-gray-200 list-none flex"
                key={item.id}
              >
                {item.cloudinaryImageId ? (
                  <img
                    className="w-1/4"
                    src={CDN_IMG_URL + item?.cloudinaryImageId}
                    alt="img"
                  />
                ) : (
                  <img className="w-1/4" src={fallBackItemPic} alt="img" />
                )}
                <div className="mx-16 my-6">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">{item.description}</p>
                  <p className="text-sm">
                    {parseFloat(item.price) / 100} Rs /-
                  </p>
                  <p className="text-sm text-gray-700">
                    {item.isVeg ? "Veg item" : "Non-Veg item"}
                  </p>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default RestaurantMenu;
