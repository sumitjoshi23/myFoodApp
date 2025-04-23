import { CDN_IMG_URL } from '../config';
import { AiFillStar } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';
import { TbDiscount2 } from 'react-icons/tb';
import classNames from 'classnames';
import logoVeg from '../utils/images/logoVeg.png';
import logoNonVeg from '../utils/images/logoNonVeg.png';

function RestaurantCard({
  aggregatedDiscountInfo,
  cuisines,
  name,
  avgRating,
  cloudinaryImageId,
  costForTwo,
  sla,
  veg,
}) {
  let classes = classNames(
    'text-white flex items-center w-10 pl-1 ',
    avgRating >= 4 ? 'bg-[#0E8388]' : 'bg-[#DF7857]'
  );

  return (
    <div className="relative hover:bg-[#f6d3b3] duration-300 hover:scale-110 hover:shadow-[#fb6c3c] h-80 w-60 shadow-2xl rounded-lg overflow-hidden border border-[#f9cea6]">
      <span className="absolute w-6 bg-slate-200 ">
        <img src={veg ? logoVeg : logoNonVeg} alt="vegNonVegIcon" />
      </span>
      <img src={CDN_IMG_URL + cloudinaryImageId} alt="card" />
      <div className="p-2">
        <h2 className="font-semibold my-2">{name}</h2>
        <h2 className="text-gray-700 text-sm">{cuisines?.join(', ')}</h2>
        <ul
          className={
            'my-2 flex items-center bg-gray-200 rounded-full text-sm font-semibold text-gray-700'
          }
        >
          <li className={classes}>
            {avgRating}
            <AiFillStar />
          </li>
          <RxDotFilled />
          <li>{sla.slaString}</li>
          <RxDotFilled />
          <li>{costForTwo}</li>
        </ul>
        {aggregatedDiscountInfo && (
          <h2 className="flex items-center font-semibold text-green-800">
            <TbDiscount2 />
            {aggregatedDiscountInfo?.shortDescriptionList[0].meta}
          </h2>
        )}
      </div>
    </div>
  );
}

export default RestaurantCard;
