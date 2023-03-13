import { CDN_IMG_URL } from "../config";
import { AiFillStar } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { TbDiscount2 } from "react-icons/tb";

import classNames from "classnames";

function RestaurantCard({
  aggregatedDiscountInfo,
  cuisines,
  name,
  avgRating,
  cloudinaryImageId,
  costForTwoString,
  slaString,
}) {
  let classes = classNames(
    "text-white flex items-center w-10 pl-1 ",
    avgRating >= 4 ? "bg-green-700" : "bg-orange-600"
  );

  return (
    <div className="h-80 w-60 shadow-lg bg-[#E1EEDD] hover:bg-[#CBE4DE] rounded-lg overflow-hidden border border-[#0E8388]">
      <img src={CDN_IMG_URL + cloudinaryImageId} alt="card Image" />
      <div className="p-2">
        <h2 className="font-semibold my-2">{name}</h2>
        <h2 className="text-gray-700 text-sm">{cuisines.join(", ")}</h2>
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
          <li>{costForTwoString}</li>
          <RxDotFilled />
          <li>{slaString}</li>
        </ul>
        <hr />
        <h2 className="flex items-center font-sans text-red-800">
          <TbDiscount2 />
          {aggregatedDiscountInfo.shortDescriptionList[0].meta}
        </h2>
      </div>
    </div>
  );
}

export default RestaurantCard;
{
  /* <div class="max-w-sm rounded overflow-hidden shadow-lg"> */
}
{
  /* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */
}
