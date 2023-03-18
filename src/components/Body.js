import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { BiReset, BiSearchAlt } from "react-icons/bi";
import { FOODAPP_API_URL } from "../config";
import RestaurantList from "./RestaurantList";
import { fallBackLandingPage } from "../utils/helper";
import { useSelector } from "react-redux";
import Button from "../Button";

const filterData = (searchText, restaurantList) => {
  return restaurantList.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
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
    setSearchText("");
  };

  async function getRestaurants() {
    const data = await fetch(FOODAPP_API_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
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
      <div className="  max-w-fit m-auto  ">
        <div className=" flex flex-col items-center">
          <form
            className="rounded-full bg-slate-200 shadow-xl p-2 flex"
            onSubmit={handleFormSubmit}
          >
            <input
              placeholder="Search restaurant here"
              className="text-center pl-12 h-12 focus:bg-[#CBE4DE] outline-none rounded-l-full w-96 rounded-lg bg-gray-100 border border-[#2E4F4F]"
              value={searchText}
              onChange={handleChange}
            ></input>
            <button className="rounded-r-full h-12 text-xl bg-gray-100 w-14 pl-4 border border-[#2E4F4F]">
              <BiSearchAlt />
            </button>
          </form>
          {searchText ? (
            <button
              onClick={() => {
                setSearchText("");
                setFilteredRestaurants(allRestaurants);
              }}
              className="font-semibold  hover:bg-[#2C3333] hover:text-white mx-2 p-1 text-xl border-2 rounded-full hover:duration-500  bg-gray-100 border-gray-300 mt-1"
            >
              <BiReset />
            </button>
          ) : null}
        </div>
      </div>
      <div className="m-4 font-semibold text-center text-3xl">
        {profile && (
          <p className="pb-4">
            Hey, <span className="italic text-[#0E8388] ">{profile.name}</span>
            😊 ... We missed you, welcome back !!!
          </p>
        )}
        Choose a variety of cuisines from restaurants near you...
        <br />
        <p className="pt-4 font-normal text-lg text-gray-600">
          {filteredRestaurants.length} Outlet(s) found...
        </p>
      </div>
      <RestaurantList filteredRestaurants={filteredRestaurants} />
    </>
  );
}

export default Body;
