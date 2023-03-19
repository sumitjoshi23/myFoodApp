import React, { useEffect, useState } from "react";
import { ImCheckmark } from "react-icons/im";
const Checkmark = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [showLoader]);

  let content = (
    <div className="flex flex-col items-center justify-center h-96 font-semibold text-xl">
      <div class="flex flex-col items-center justify-center">
        {showLoader ? (
          <>
            Sit back and relax while we are processing your order ♨️♨️♨️
            <div
              class="inline-block h-12 w-12 m-8 animate-spin rounded-full border-4 border-green-500 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </>
        ) : (
          <>
            Yayy...Order placed 😋 !!! Enjoy your delicious food soon...
            <div
              class=" flex items-center justify-center h-12 w-12 m-8 duration-500 scale-150 rounded-full bg-green-600"
              role="status"
            >
              <ImCheckmark className="text-white" />
            </div>
          </>
        )}
      </div>
    </div>
  );
  return content;
};

export default Checkmark;
