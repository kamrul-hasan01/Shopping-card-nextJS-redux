import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
  user: userSlice,
});
export const store = configureStore({ reducer: rootReducer });
export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
