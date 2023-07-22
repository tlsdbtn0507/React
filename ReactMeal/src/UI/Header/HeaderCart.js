import classes from "../../Css/HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";
import CartIcon from "../CartIcon";

import { useContext, useEffect, useState } from "react";

const HeaderCart = (props) => {
  const ctx = useContext(CartContext);
  const [bump, setBump] = useState(1);

  const length =
    ctx.cart === undefined
      ? 0
      : ctx.cart.map((e) => e.count).reduce((a, b) => a + b, 0);
  const bumping = ctx.totalAmount === undefined ? 0 : ctx.totalAmount;

  const click = () => {
    props.getClick();
  };

  useEffect(() => {
    setBump(bumping);
  }, [bumping]);

  return (
    <div className={bump > bumping - 1 ? classes.bump : ""} onClick={click}>
      <button className={classes.button}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={classes.badge}>{length}</div>
      </button>
    </div>
  );
};

export default HeaderCart;
