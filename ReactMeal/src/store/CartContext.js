import React, { useState, useEffect, useContext, useReducer } from "react";
import { DUMMY_MEALS } from "../Meal/dummy-meals";

const CartContext = React.createContext({
  totalAmount: 0,
  totalMeals: null,
  cart: [],
  addCart: () => {},
  adding: () => {},
  removing: () => {},
});

const defaultCart = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const total = state.totalAmount + +action.item.price * +action.item.count;

    const existItemIndex = state.item.findIndex((i) => i.id === action.item.id);
    const existItem = state.item[existItemIndex];

    let items;
    if (existItem) {
      items = [...state.item];
      items[existItemIndex].count += action.item.count;
    } else items = state.item.concat(action.item);

    return {
      item: items,
      totalAmount: total,
    };
  }
  return defaultCart;
};

export const CartContextProvider = (props) => {
  //더미데이터를 로컬스토리지에 저장하고쓸것
  const [totalMeals, setTotalMeals] = useState();
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  useEffect(() => {
    const meals = JSON.parse(localStorage.getItem("meals"));
    if (!meals) {
      localStorage.setItem("meals", JSON.stringify(DUMMY_MEALS));
    }
    setTotalMeals(meals);
  }, []);

  const addItem = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removing = (item) => {
    dispatchCart({ type: "REAMOVE", id: item.id });
  };

  return (
    <CartContext.Provider
      value={{
        totalAmount: cartState.totalAmount,
        totalMeals: totalMeals,
        removing: removing,
        addCart: addItem,
        cart: cartState.item,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
