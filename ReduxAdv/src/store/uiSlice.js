import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsValid: false },
  reducers: {
    toggle(state) {
      state.cartIsValid = !state.cartIsValid;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
