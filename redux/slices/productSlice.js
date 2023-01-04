import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
  error: "",
};
export const fetchProducts = createAsyncThunk("fetchProducts", () => {
  return axios.get("https://kamrul.pro/api/products.json");
});
const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      //   console.log(payload.data.products);
      state.loading = false;
      state.products = payload?.data?.products;
      state.error = "";
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action?.error?.message;
    },
  },
});
export default productSlice.reducer;
