import { useEffect, useState } from "react";
import { RESRAURANT_MENU_URL } from "../config";

const useRestaurant = (id) => {
  let [restaurant, setRestaurant] = useState(null);
  async function getRestaraunt() {
    let data = await fetch(RESRAURANT_MENU_URL + id);
    let json = await data.json();
    setRestaurant(json.data);
  }
  useEffect(() => {
    getRestaraunt();
  }, []);

  return restaurant;
};

export default useRestaurant;
