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
    <div className="grid grid-cols-2 ">
      {menuInfo.map((menuItem, i) => (
        <div
          className="even:mr-0 odd:ml-0 hover:bg-[#f9ebb0] duration-300 hover:scale-105 hover:shadow-[#fb6c3c] rounded-lg m-6 shadow-lg border border-gray-200 grid"
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
            <p className="m-1 mt-3 mb-4 font-semibold">
              Rs{" "}
              {menuItem.price ? menuItem.price / 100 : fallbackItemPrice / 100}
              /-
            </p>
            {items.some((i) => i.id === menuItem.id) ? (
              <div className="font-semibold flex items-center hover:bg-[#8c3113] bg-[#cc4416] justify-between text-white hover:text-white text-xl rounded-full duration-500 h-12 py-4 px-9 w-min">
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
                className="border-none text-white py-4 px-[70px] hover:bg-[#c74f27] bg-[#fb6c3c]"
                onClick={() => dispatch(addItem(menuItem))}
              >
                Add
              </Button>
            )}
          </div>
        </div>
      ))}
      <div className="px-0 fixed bottom-8 right-44">
        {items.length !== 0 && (
          <div className="rounded-full flex ">
            <Button
              onClick={() => {
                dispatch(clearCart());
              }}
              className="hover:scale-110 text-base rounded-l-full text-white rounded-lg bg-gray-500 "
            >
              Clear cart
            </Button>
            <Link to="/cart">
              <Button className="hover:scale-110 text-base rounded-r-full text-white rounded-lg bg-[#ed5d2d]">
                <AiOutlineShoppingCart className="m-1 text-4xl" />
                {totalItemsInCart} !! Proceed to pay{" "}
                <BiRightArrowAlt className="text-2xl" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default RestaurantMenuList;
