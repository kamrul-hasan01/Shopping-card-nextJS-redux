import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  token: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
export const { setToken, setUserInfo } = userSlice.actions;
export default userSlice.reducer;
