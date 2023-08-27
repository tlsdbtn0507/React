import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exisItem = state.item.find((e) => e.id === newItem.id);
      if (!exisItem) {
        state.item.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      } else {
        exisItem.quantity += newItem.quantity;
        exisItem.totalPrice = exisItem.totalPrice + newItem.price;
      }
      state.totalQuantity = state.item
        .map((e) => e.quantity)
        .reduce((a, b) => a + b, 0);
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exisItem = state.item.find((e) => e.id === id);
      if (exisItem.quantity === 1)
        state.item = state.item.filter((e) => e.id !== id);
      else {
        exisItem.quantity--;
        exisItem.totalPrice = exisItem.totalPrice - exisItem.price;
      }
      state.totalQuantity = state.item
        .map((e) => e.quantity)
        .reduce((a, b) => a + b, 0);
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
