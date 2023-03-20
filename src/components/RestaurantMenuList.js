import fallBackItemPic from "../utils/images/fallBackItemPic.jpeg";
import logoVeg from "../utils/images/logoVeg.png";
import logoNonVeg from "../utils/images/logoNonVeg.png";
import { CDN_IMG_URL } from "../config";

import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store";
import { fallbackItemPrice } from "../utils/helper";
function RestaurantMenuList({ menuDataSet }) {
  let menuDetails = menuDataSet.map((card) => card.card.card);
  let itemCards = menuDetails
    .filter((card) => card.itemCards)
    .map((card) => card.itemCards);
  let menuInfo = itemCards
    .map((data) => {
      return data.map((card) => card.card.info);
    })
    .flat();

  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  return (
    <div className="grid grid-cols-2">
      {menuInfo.map((item, i) => (
        <div
          className=" hover:bg-[#CBE4DE] duration-300 hover:scale-105 hover:shadow-[#2E4F4F] rounded-lg m-6 shadow-lg border border-gray-200 grid"
          key={i}
        >
          <div className="max-w-[10vw] p-4">
            <img
              className="rounded-lg"
              src={item.imageId ? CDN_IMG_URL + item.imageId : fallBackItemPic}
              alt="Item Pic"
            />
          </div>

          <div className="px-4 mb-6">
            <div className="font-semibold">
              {item.name}
              <img
                className="my-1 w-6"
                alt="vegNonVegIcon"
                src={item.isVeg ? logoVeg : logoNonVeg}
              />
            </div>
            <p className="m-1 text-gray-500">{item.description}</p>
            <p className="m-1 text-sm">
              Rs {item.price ? item.price / 100 : fallbackItemPrice / 100}
              /-
            </p>
            <div className="flex mt-4 ">
              <Button onClick={() => dispatch(addItem(item))}>Add</Button>
              {Object.values(items).includes(item) && (
                <Button
                  className="border-red-900 mx-2 hover:bg-red-800 bg-red-100"
                  onClick={() => dispatch(removeItem(item))}
                >
                  Remove
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default RestaurantMenuList;
