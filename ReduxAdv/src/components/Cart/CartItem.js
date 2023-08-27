import { useDispatch } from "react-redux";
import classes from "../../css/CartItem.module.css";
import { cartAction } from "../../store/cartSlice";

const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props.item;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(cartAction.addItemToCart({ ...props.item, quantity: 1 }));
  };

  const remove = () => [dispatch(cartAction.removeItemFromCart(id))];

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={remove}>-</button>
          <button onClick={add}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
