import fallBackItemPic from "../utils/images/fallBackItemPic.jpeg";
import logoVeg from "../utils/images/logoVeg.png";
import logoNonVeg from "../utils/images/logoNonVeg.png";
import { CDN_IMG_URL } from "../config";

import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store";
import { fallbackItemPrice } from "../utils/helper";
import { Link } from "react-router-dom";
import { clearCart } from "../store";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";

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
  const totalItemsInCart = items.reduce(
    (acc, curr) => (acc += curr.quantity),
    0
  );

  return (
    <div className="grid grid-cols-2">
      {menuInfo.map((menuItem, i) => (
        <div
          className=" hover:bg-[#CBE4DE] duration-300 hover:scale-105 hover:shadow-[#2E4F4F] rounded-lg m-6 shadow-lg border border-gray-200 grid"
          key={i}
        >
          <div className="max-w-[10vw] p-4">
            <img
              className="rounded-lg"
              src={
                menuItem.imageId
                  ? CDN_IMG_URL + menuItem.imageId
                  : fallBackItemPic
              }
              alt="Item Pic"
            />
          </div>

          <div className="px-4 mb-6">
            <div className="font-semibold">
              {menuItem.name}
              <img
                className="my-2 w-6"
                alt="vegNonVegIcon"
                src={menuItem.isVeg ? logoVeg : logoNonVeg}
              />
            </div>
            <p className="m-1 text-gray-500">{menuItem.description}</p>
            <p className="m-1 my-3 font-semibold">
              Rs{" "}
              {menuItem.price ? menuItem.price / 100 : fallbackItemPrice / 100}
              /-
            </p>
            {items.some((i) => i.id === menuItem.id) ? (
              <div className="font-semibold flex items-center justify-between text-white hover:text-white text-xl  rounded-full duration-500 h-12 py-4 px-9 w-min bg-[#3F979B] hover:bg-[#2d7d81]">
                <button
                  className="px-3"
                  onClick={() => dispatch(removeItem(menuItem))}
                >
                  -
                </button>
                <p className="px-3 ">
                  {items.find((item) => item.id === menuItem.id).quantity}
                </p>
                <button
                  className=" px-3 "
                  onClick={() => dispatch(addItem(menuItem))}
                >
                  +
                </button>
              </div>
            ) : (
              <Button
                className="border-none text-white py-4 px-[70px] hover:bg-[#2b8e77] bg-green-800"
                onClick={() => dispatch(addItem(menuItem))}
              >
                Add
              </Button>
            )}
          </div>
        </div>
      ))}
      (
      <div className="px-0 fixed bottom-2 right-44">
        {items.length !== 0 && (
          <div className="rounded-full flex ">
            <Link to="/cart">
              <Button className="hover:scale-110 hover:bg-green-700 text-xs rounded-l-full text-white rounded-lg bg-green-800 ">
                <AiOutlineShoppingCart className="m-1 text-4xl" />
                {totalItemsInCart} !! Proceed to pay{" "}
                <BiRightArrowAlt className="text-2xl" />
              </Button>
            </Link>

            <Button
              onClick={() => {
                dispatch(clearCart());
              }}
              className="hover:scale-110 hover:bg-red-700 text-xs rounded-r-full text-white rounded-lg bg-red-800 "
            >
              Clear cart
            </Button>
          </div>
        )}
      </div>
      );
    </div>
  );
}
export default RestaurantMenuList;
