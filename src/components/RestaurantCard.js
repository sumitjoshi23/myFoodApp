import { CDN_IMG_URL } from '../config';
import { AiFillStar } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';
import { MdDiscount } from 'react-icons/md';
import classNames from 'classnames';
import logoVeg from '../utils/images/logoVeg.png';
import logoNonVeg from '../utils/images/logoNonVeg.png';

function RestaurantCard({
  aggregatedDiscountInfoV3,
  cuisines,
  name,
  avgRating,
  cloudinaryImageId,
  costForTwo,
  sla,
  veg,
}) {
  let classes = classNames(
    'text-white flex items-center w-12 px-2 rounded-full',
    avgRating >= 4 ? 'bg-[#0E8388]' : 'bg-[#DF7857]'
  );

  return (
    <div className="relative hover:bg-[#f6d3b3] duration-300 hover:scale-110 hover:shadow-[#fb6c3c] w-72 p-1 shadow-2xl rounded-lg overflow-hidden border border-[#f9cea6]">
      <span className="absolute w-6 bg-slate-200 ">
        <img src={veg ? logoVeg : logoNonVeg} alt="vegNonVegIcon" />
      </span>
      <img
        className="w-full h-64 object-cover"
        src={CDN_IMG_URL + cloudinaryImageId}
        alt="card"
      />
      <div className="p-2">
        <h2 className="font-semibold my-2 text-center overflow-hidden text-ellipsis whitespace-nowrap">
          {name}
        </h2>
        <h2 className="text-gray-700 text-sm text-center overflow-hidden text-ellipsis whitespace-nowrap">
          {cuisines?.join(', ')}
        </h2>
        <ul
          className={
            'my-2 flex items-center justify-between p-2 bg-gray-200 rounded text-sm font-semibold text-gray-700'
          }
        >
          <li className={classes}>
            {avgRating}
            <AiFillStar />
          </li>
          <RxDotFilled />
          <li className="text-xs">{sla.slaString}</li>
          <RxDotFilled />
          <li className="text-xs">{costForTwo}</li>
        </ul>
        {aggregatedDiscountInfoV3 && (
          <h2 className="flex pt-2 items-center justify-center font-semibold text-[#fb6c3c]">
            <MdDiscount className="mr-2 text-red-500" />{' '}
            {aggregatedDiscountInfoV3?.header}{' '}
            {aggregatedDiscountInfoV3?.subHeader}
          </h2>
        )}
      </div>
    </div>
  );
}

export default RestaurantCard;
