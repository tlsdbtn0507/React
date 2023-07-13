import classes from "../../Css/HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";
import CartIcon from "../CartIcon";

import { useContext, useEffect, useState } from "react";

const HeaderCart = (props) => {
  const ctx = useContext(CartContext);

  const length = ctx.totalAmount === undefined ? 0 : ctx.totalAmount;

  //   useEffect(() => {
  //     console.log(1);
  //   }, [ctx.totalAmount]);

  return (
    <>
      <button className={classes.button}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={classes.badge}>{length}</div>
      </button>
    </>
  );
};

export default HeaderCart;
