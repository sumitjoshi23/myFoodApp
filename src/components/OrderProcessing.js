import React from "react";
import { ImCheckmark } from "react-icons/im";
import useShowMainContent from "../hooks/useShowMainContent";
const OrderProcessing = () => {
  const showMainContent = useShowMainContent(2000);

  const content = (
    <div className="flex flex-col items-center justify-center h-96 font-semibold text-xl">
      <div className="flex flex-col items-center justify-center">
        {!showMainContent ? (
          <>
            Sit back and relax while we are processing your order ♨️♨️♨️
            <div
              className="inline-block h-12 w-12 m-8 animate-spin rounded-full border-4 border-green-500 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </>
        ) : (
          <>
            Yayy...Order placed 😋 !!! Enjoy your delicious food soon...
            <div className="flex items-center justify-center h-12 w-12 m-8 duration-700 scale-150 rounded-full bg-green-600">
              <ImCheckmark className="text-white" />
            </div>
          </>
        )}
      </div>
    </div>
  );
  return content;
};

export default OrderProcessing;
