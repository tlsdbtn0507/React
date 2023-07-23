import classes from "../../Css/HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";
import CartIcon from "../CartIcon";

import { useContext, useEffect, useState } from "react";

const HeaderCart = (props) => {
  const { cart, totalAmount } = useContext(CartContext);
  const [bump, setBump] = useState(false);

  const length = totalAmount === undefined ? 0 : totalAmount;

  const click = () => {
    props.getClick();
  };
  const bumping = `${classes.button}  ${bump ? classes.bump : ""}`;

  useEffect(() => {
    if (!cart) return;

    setBump(true);
    console.log(cart);

    const timer = setTimeout(() => setBump(false), 300);

    return () => clearTimeout(timer);
  }, [totalAmount]);

  return (
    <button className={bumping} onClick={click}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      Your Cart
      <div className={classes.badge}>{length}</div>
    </button>
  );
};

export default HeaderCart;
