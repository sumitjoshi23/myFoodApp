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
      <div className="flex my-4">
        <div className="self-start min-w-[30%] border border-gray-200 rounded-lg mr-4 bg-[#2E4F4F]">
          <div className="py-2 mx-4">
            <div className="py-4 sticky top-20 z-5 shadow-xl my-1 font-bold text-xl mb-3 bg-[#CBE4DE] text-[#2E4F4F] p-2 rounded-lg flex justify-center">
              <p>{name}</p>
            </div>
            <img src={CDN_IMG_URL + cloudinaryImageId} alt="img" />{" "}
            <h2 className="m-2 text-[#CBE4DE] text-sm">
              {cuisines?.join(", ")}
            </h2>
            <hr />
            <ul
              className={
                "m-2 flex items-center justify-center bg-gray-200 rounded-lg text-sm font-semibold text-gray-700"
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
            <div className="p-2">
              <h2 className="my-2">
                {labels.map(({ title, message }) => {
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
        <div>
          <OfferSection restaurant={restaurant} />
          <OfferSlider />
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
//  writing-mode: vertical-lr;
// import fallBackItemPic from "../utils/images/fallBackItemPic.jpeg";
// import logoVeg from "../utils/images/logoVeg.png";
// import logoNonVeg from "../utils/images/logoNonVeg.png";
// import { CDN_IMG_URL } from "../config";

// import Button from "../Button";
// import { useDispatch, useSelector } from "react-redux";
// import { addItem, removeItem } from "../store";
// function MenuItem({ a }) {
//   console.log(a);

//   // const itemsx = a.map((card, index) => {
//   //   if (index !== 0) {
//   //     return card?.card?.itemCards.map((card) => (
//   //       <p>
//   //         {card.info.name}
//   //         {card.info.category}
//   //         {card.info.description}
//   //         {card.info.price}
//   //       </p>
//   //     ));
//   //   } else return;
//   // });
//   const dispatch = useDispatch();
//   const items = useSelector((store) => store.cart.items);
//   return (
//     <div className="w-full">
//       {a[1].card?.card?.itemCards.map((card) => card.card.info.name)}
//       <ul className="flex flex-wrap">/</ul>
//     </div>
//   );
// }
// export default MenuItem;
