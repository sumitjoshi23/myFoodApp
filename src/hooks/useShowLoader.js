import { useEffect, useState } from "react";

const useShowLoader = (delay) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowLoader(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [showLoader]);

  return showLoader;
};

export default useShowLoader;
