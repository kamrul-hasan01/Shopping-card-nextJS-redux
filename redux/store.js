import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
});
export const store = configureStore({ reducer: rootReducer });
export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
