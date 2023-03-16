import { CDN_IMG_URL } from "../config";
import { AiFillStar } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { TbDiscount2 } from "react-icons/tb";
import classNames from "classnames";
import logoVeg from "../utils/images/logoVeg.png";
import logoNonVeg from "../utils/images/logoNonVeg.png";

function RestaurantCard({
  aggregatedDiscountInfo,
  cuisines,
  name,
  avgRating,
  cloudinaryImageId,
  costForTwoString,
  slaString,
  veg,
}) {
  let classes = classNames(
    "text-white flex items-center w-10 pl-1 ",
    avgRating >= 4 ? "bg-[#0E8388]" : "bg-[#DF7857]"
  );

  return (
    <div className="relative m-8 hover:bg-[#CBE4DE] hover:duration-300 hover:scale-110 hover:shadow-[#2E4F4F] h-80 w-60 shadow-2xl bg-[#E1EEDD] rounded-lg overflow-hidden border border-[#0E8388]">
      <span className="absolute w-6 bg-slate-200 ">
        <img src={veg ? logoVeg : logoNonVeg} />
      </span>
      <img src={CDN_IMG_URL + cloudinaryImageId} alt="card Image" />
      <div className="p-2">
        <h2 className="font-semibold my-2">{name}</h2>
        <h2 className="text-gray-700 text-sm">{cuisines?.join(", ")}</h2>
        <hr />
        <ul
          className={
            "my-2 flex items-center bg-gray-200 rounded-full text-sm font-semibold text-gray-700"
          }
        >
          <li className={classes}>
            {avgRating}
            <AiFillStar />
          </li>
          <RxDotFilled />
          <li>{slaString}</li>
          <RxDotFilled />
          <li>{costForTwoString}</li>
        </ul>
        <hr />
        {aggregatedDiscountInfo && (
          <h2 className="flex items-center font-sans text-red-800">
            <TbDiscount2 />
            {aggregatedDiscountInfo?.shortDescriptionList[0].meta}
          </h2>
        )}
      </div>
    </div>
  );
}

export default RestaurantCard;
