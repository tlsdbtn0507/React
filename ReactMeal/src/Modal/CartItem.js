import { useContext } from "react";
import css from "../Css/CartItem.module.css";
import CartContext from "../store/CartContext";

const CartItem = (props) => {
  const item = props.item;

  const ctx = useContext(CartContext);

  const adding = () => {
    ctx.addCart(item);
  };

  const reducing = () => {
    ctx.removing(item);
  };

  return (
    <li className={css.cartItem}>
      <div>
        <h2>{item.name}</h2>
        <div className={css.summary}>
          <p className={css.price}>${item.price}</p>
          <p className={css.amount}>x{item.count}</p>
        </div>
      </div>
      <div className={css.actions}>
        <button onClick={adding}>+</button>
        <button onClick={reducing}>-</button>
      </div>
    </li>
  );
};
export default CartItem;
