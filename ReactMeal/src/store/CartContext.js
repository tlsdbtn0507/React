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
    // let cart = ctx.cart

    if (ctx.cart.map((e) => e.id).includes(item.id)) {
      //   ctx.cart.push({ ...item, pirce: item.price * 2, count: item.count * 2 });
      //   const result = ctx.cart.filter((e) => e.id !== item.id);
      console.log(1);
      setCart(
        ctx.cart
          .filter((e) => e.id !== item.id)
          .push({ ...item, pirce: item.price * 2, count: item.count * 2 })
      );
    } else ctx.cart.push(item);
    setCart(ctx.cart);
    setTotalAmount(ctx.cart.length);
    console.log(ctx.cart);
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
