import React from "react";
function RestaurantDetailsShimmer() {
  return (
    <>
      <div className="mb-8 mt-4 bg-gray-100 h-16 rounded-lg animate-pulse">
        <div className="h-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg"></div>
      </div>
      <div className="rounded-lg bg-gray-100 h-96">
        <div className="h-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg"></div>
      </div>
    </>
  );
}

export default RestaurantDetailsShimmer;
