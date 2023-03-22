function RestaurantsListingShimmer() {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return (
            <div
              key={index}
              className="mx-4 my-8 h-80 w-60 bg-gray-100 rounded-lg overflow-hidden "
            ></div>
          );
        })}
    </div>
  );
}
export default RestaurantsListingShimmer;
