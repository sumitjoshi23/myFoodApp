import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { signedInUserReducer } from "./slices/signedInUserSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    signedInUser: signedInUserReducer,
  },
});
// console.log(store.getState());

export * from "./slices/cartSlice";
export * from "./slices/signedInUserSlice";
export default store;
