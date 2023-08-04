import React from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ filteredRestaurants }) => {
  return (
    <div className="flex flex-wrap justify-around">
      {filteredRestaurants.map((restaurant) => {
        return (
          <Link
            className="m-8"
            key={restaurant?.info.id}
            to={"/restaurant/" + restaurant?.info.id}
          >
            <RestaurantCard {...restaurant.info} />
          </Link>
        );
      })}
    </div>
  );
};

export default RestaurantList;
