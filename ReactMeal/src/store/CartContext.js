import React, { useState, useEffect, useContext } from "react";
import { DUMMY_MEALS } from "../Meal/dummy-meals";

const CartContext = React.createContext({
  totalAmount: 0,
  totalMeals: null,
  cart: [],
  addCart: () => {},
  adding: () => {},
  removing: () => {},
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

  const setting = () => {
    setCart(ctx.cart);
    const totalLength = ctx.cart.map((e) => e.count).reduce((a, b) => a + b, 0);
    setTotalAmount(totalLength);
  };

  const getIndexToChange = (item) => {
    return ctx.cart.findIndex((e) => e.id === item.id);
  };

  const addItem = (item) => {
    if (ctx.cart.map((e) => e.id).includes(item.id)) {
      const toChange = getIndexToChange(item);

      ctx.cart[toChange].price += item.price;
      ctx.cart[toChange].count += item.count;
    } else ctx.cart.push(item);
    setting();
  };

  const adding = (item) => {
    const toChange = getIndexToChange(item);

    ctx.cart[toChange].price += item.originalPrice;
    ++ctx.cart[toChange].count;

    setting();
  };

  const removing = (item) => {
    const toChange = getIndexToChange(item);

    ctx.cart[toChange].price -= item.originalPrice;
    --ctx.cart[toChange].count;
    !ctx.cart[toChange].count && ctx.cart.splice(toChange, 1);

    setting();
  };

  return (
    <CartContext.Provider
      value={{
        totalAmount: totalAmount,
        totalMeals: totalMeals,
        adding: adding,
        removing: removing,
        addCart: addItem,
        cart: cart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
