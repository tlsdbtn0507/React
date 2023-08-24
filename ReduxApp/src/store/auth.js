import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isLogined: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLogined = true;
    },
    logout(state) {
      state.isLogined = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
