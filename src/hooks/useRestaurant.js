import { useCallback, useEffect, useState } from "react";
import { RESRAURANT_MENU_URL } from "../config";

const useRestaurant = (id) => {
  let [restaurant, setRestaurant] = useState(null);
  const getRestaurant = useCallback(
    async function () {
      let data = await fetch(RESRAURANT_MENU_URL + id);
      let json = await data.json();
      setRestaurant(json.data);
    },
    [id]
  );
  useEffect(() => {
    getRestaurant();
  }, [getRestaurant]);

  return restaurant;
};

export default useRestaurant;
