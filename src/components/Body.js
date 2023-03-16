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
      <div className="flex justify-center py-2 px-8 h-20 mx-4">
        <div className=" fixed top-20 z-10 p-3 shadow-lg bg-white rounded-full">
          <form className=" flex h-full p-1" onSubmit={handleFormSubmit}>
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
        </div>
        {/* {searchText ? (
          <Button
            onClick={(e) => {
              setSearchText("");
              setFilteredRestaurants(allRestaurants);
            }}
            className="bg-gray-100 border z-10 h-12 border-gray-300 rounded-full  pl-2"
          >
            <BiReset />
          </Button>
        ) : null} */}
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
