import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BiSearchAlt, BiReset } from "react-icons/bi";
import Button from "../Button";
import { FOODAPP_API_URL } from "../config";

const filterData = (searchText, restaurantList) => {
  return restaurantList.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
};

function Body() {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  async function getRestaurants() {
    const data = await fetch(FOODAPP_API_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  if (!allRestaurants) {
    return null;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex py-2 px-8 h-12 mx-4 my-2">
        <form className="flex mx-auto px-24" onSubmit={handleFormSubmit}>
          <input
            placeholder="Search restaurant here"
            className="h-12 focus:bg-[#CBE4DE] outline-none rounded-l-full w-96 px-3 rounded-lg bg-gray-100 border border-[#2E4F4F]"
            value={searchText}
            onChange={handleChange}
          ></input>
          <Button className="rounded-r-full h-12 text-xl bg-gray-100 w-14 pl-4 border border-[#2E4F4F]">
            <BiSearchAlt />
          </Button>
        </form>
        {searchText ? (
          <Button
            onClick={(e) => {
              setSearchText("");
              setFilteredRestaurants(allRestaurants);
            }}
            className="bg-gray-100 border h-12 border-gray-300 rounded-full w-8 mx-1 pl-2"
          >
            <BiReset />
          </Button>
        ) : null}
      </div>
      <div className="flex flex-wrap justify-around">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.data.id}
              to={"/restaurant/" + restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Body;
