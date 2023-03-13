function Shimmer() {
  return (
    <div className="mx-12 flex flex-wrap justify-center">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return (
            <div
              key={index}
              className="p-2 m-4 h-96 w-60 shadow-lg bg-gray-200 rounded-lg overflow-hidden"
            ></div>
          );
        })}
    </div>
  );
}
export default Shimmer;
