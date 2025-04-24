import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ filteredRestaurants }) => {
  console.log('fil', filteredRestaurants);
  return (
    <div className="flex flex-wrap justify-around">
      {filteredRestaurants.map((restaurant) => {
        return (
          <Link
            className="m-6"
            key={restaurant?.info.id}
            to={'/restaurant/' + restaurant?.info.id}
          >
            <RestaurantCard {...restaurant.info} />
          </Link>
        );
      })}
    </div>
  );
};

export default RestaurantList;
