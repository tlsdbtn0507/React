import React, { useState, useEffect, useContext } from "react";
import { DUMMY_MEALS } from "../Meal/dummy-meals";

const CartContext = React.createContext({
  totalAmount: 0,
  totalMeals: null,
  cart: [],
  addCart: () => {},
});

export const CartContextProvider = (props) => {
  //더미데이터를 로컬스토리지에 저장하고쓸것
  const [totalAmount, setTotalAmount] = useState();
  const [totalMeals, setTotalMeals] = useState();
  const [cart, setCart] = useState();

  const ctx = useContext(CartContext);

  useEffect(() => {
    const meals = JSON.parse(localStorage.getItem("meals"));

    if (!meals) {
      localStorage.setItem("meals", JSON.stringify(DUMMY_MEALS));
    }

    setTotalMeals(meals);
  }, []);

  const addItem = (item) => {
    ctx.cart.push(item);
    setCart(ctx.cart);
    setTotalAmount(ctx.cart.length);
    // console.log(cart, "addItem");
  };

  return (
    <CartContext.Provider
      value={{
        totalAmount: totalAmount,
        totalMeals: totalMeals,
        addCart: addItem,
        cart: cart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
