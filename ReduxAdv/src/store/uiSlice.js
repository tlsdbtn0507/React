import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsValid: false, sendCartResult: {}, showNotif: false },
  reducers: {
    toggle(state) {
      state.cartIsValid = !state.cartIsValid;
    },
    setNotif(state) {
      state.showNotif = !state.showNotif;
    },
    sendCartResult(state, action) {
      state.sendCartResult = { ...action.payload };
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
