import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { BiReset, BiSearchAlt } from "react-icons/bi";
import { FOODAPP_API_URL } from "../config";
import RestaurantList from "./RestaurantList";
import { fallBackLandingPage } from "../utils/helper";
import { useSelector } from "react-redux";

const filterData = (searchText, restaurantList) => {
  return restaurantList.filter((restaurant) =>
    restaurant?.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

function Body() {
  const profile = useSelector((store) => store.signedInUser.profile);
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
    let allRestaurantsCard = json?.data?.cards.find(
      (card) => card.cardType === "seeAllRestaurants"
    );
    setAllRestaurants(allRestaurantsCard?.data?.data?.cards);
    setFilteredRestaurants(allRestaurantsCard?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurants().catch(() => {
      document.write(fallBackLandingPage);
    });
  }, []);

  if (!allRestaurants) {
    return null;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="max-w-fit m-auto  ">
        <div className="flex flex-col items-center">
          <div className="m-4 font-semibold text-center text-3xl">
            {profile && (
              <p className="pb-4">
                Hey,{" "}
                <span className="italic text-[#E97171] ">{profile.name}</span>
                😊 Welcome back !!!
              </p>
            )}
            Our restaurants are waiting for your next order...
          </div>
          <form
            className="rounded-full bg-[#f7dddd] shadow-xl p-2 flex"
            onSubmit={handleFormSubmit}
          >
            <input
              placeholder="Search restaurant here"
              className="text-center pl-12 h-12 focus:bg-[#fde3e3] outline-none rounded-l-full w-[32rem] rounded-lg bg-gray-100 border border-[#810000]"
              value={searchText}
              onChange={handleChange}
            ></input>
            <button className="rounded-r-full h-12 text-xl bg-gray-100 w-14 pl-4 border border-[#810000]">
              <BiSearchAlt />
            </button>
          </form>
          {searchText ? (
            <button
              onClick={() => {
                setSearchText("");
                setFilteredRestaurants(allRestaurants);
              }}
              className="font-semibold  hover:bg-[#2C3333] hover:text-white mx-2 p-1 text-xl border-2 rounded-full duration-500  bg-gray-100 border-gray-300 mt-1"
            >
              <BiReset />
            </button>
          ) : null}
          <br />
          <p className="font-normal text-lg text-gray-600">
            {filteredRestaurants.length} Outlet(s) found...
          </p>
        </div>
      </div>
      <RestaurantList filteredRestaurants={filteredRestaurants} />
    </>
  );
}

export default Body;
