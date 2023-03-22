import { useEffect, useState } from "react";

const useShowMainContent = (delay) => {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowMainContent(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [showMainContent, delay]);

  return showMainContent;
};

export default useShowMainContent;
