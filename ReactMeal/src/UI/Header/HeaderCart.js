import classes from "../../Css/HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";
import CartIcon from "../CartIcon";

import { useContext, useEffect, useState } from "react";

const HeaderCart = (props) => {
  const ctx = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [bump, setBump] = useState(1);

  const length = ctx.totalAmount === undefined ? 0 : ctx.totalAmount;
  const bumping = ctx.totalAmount === undefined ? 0 : ctx.totalAmount;

  const click = () => {
    props.getClick();
  };

  useEffect(() => {
    const total =
      ctx.totalAmount === undefined
        ? 0
        : ctx.cart.map((e) => e.count).reduce((a, b) => a + b, 0);
    setTotalAmount(total);
    setBump(bumping);
  }, [length, bumping, ctx.totalAmount, ctx.cart]);

  return (
    <div className={bump > bumping - 1 ? classes.bump : ""} onClick={click}>
      <button className={classes.button}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={classes.badge}>{totalAmount}</div>
      </button>
    </div>
  );
};

export default HeaderCart;
