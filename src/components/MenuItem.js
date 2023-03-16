import fallBackItemPic from "../utils/images/fallBackItemPic.jpeg";
import logoVeg from "../utils/images/logoVeg.png";
import logoNonVeg from "../utils/images/logoNonVeg.png";
import { CDN_IMG_URL } from "../config";

import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store";
function MenuItem({ restaurant }) {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  return (
    <div className="w-full">
      <ul className="flex flex-wrap">
        {Object.values(restaurant.menu.items).map((item) => (
          <li
            className="hover:bg-[#CBE4DE] hover:duration-300 hover:scale-105 hover:shadow-[#2E4F4F] rounded-lg w-full m-8 shadow-lg border border-gray-200 list-none flex"
            key={item.id}
          >
            <div className="w-1/3 p-4">
              <img
                className="rounded-lg"
                src={
                  item.cloudinaryImageId
                    ? CDN_IMG_URL + item?.cloudinaryImageId
                    : fallBackItemPic
                }
                alt="Item Pic"
              />
            </div>

            <div className="px-4 my-6">
              <div className="font-semibold">
                {item.name}
                <img className="w-6" src={item.isVeg ? logoVeg : logoNonVeg} />
              </div>
              <p className="text-gray-500">{item.description}</p>
              <p className="text-sm">
                <span>Rs </span>
                {item.price
                  ? item.price / 100
                  : item?.variantsV2?.variant_groups[0]?.variations[0]?.price}
                /-
              </p>
              <div className="flex">
                <Button
                  className="font-semibold flex justify-center items-center hover:bg-[#0E8388] hover:text-white m-2 px-5 text-xl bg-[#CBE4DE] border-2 rounded-full border-[#2C3333]"
                  onClick={() => dispatch(addItem(item))}
                >
                  Add to cart
                </Button>
                {Object.values(items).includes(item) && (
                  <Button
                    className="bg-red-100 font-semibold flex justify-center items-center hover:bg-red-200 m-2 px-5 text-xl border-2 rounded-full  border-red-900"
                    onClick={() => dispatch(removeItem(item))}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MenuItem;
