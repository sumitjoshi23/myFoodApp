function RestaurantsListingShimmer() {
  return (
    <>
      <div className="rounded-full my-10 h-14 w-1/2 m-auto bg-gray-100 animate-pulse">
        <div className="rounded-full h-full bg-gradient-to-r from-gray-100 to-gray-200"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        {Array(10)
          .fill("")
          .map((e, index) => {
            return (
              <div
                key={index}
                className="mx-4 my-8 h-80 w-60 bg-gray-100 rounded-lg overflow-hidden animate-pulse"
              >
                <div className="h-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg"></div>
              </div>
            );
          })}
      </div>
    </>
  );
}
export default RestaurantsListingShimmer;
