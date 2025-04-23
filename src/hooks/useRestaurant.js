import { useCallback, useEffect, useState } from 'react';
import { RESTAURANT_MENU_URL } from '../config';

const useRestaurant = (id) => {
  let [restaurant, setRestaurant] = useState(null);
  const getRestaurant = useCallback(
    async function () {
      let data = await fetch(RESTAURANT_MENU_URL + id);
      let json = await data.json();
      console.log('json.data', json.data);

      setRestaurant(json.data);
    },
    [id]
  );
  useEffect(() => {
    getRestaurant();
  }, [getRestaurant]);
  console.log('restaurant', restaurant);
  return restaurant;
};

export default useRestaurant;
