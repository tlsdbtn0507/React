import css from "../Css/CartItem.module.css";

const CartItem = (props) => {
  const item = props.item;
  return (
    <div className={css.cartItem}>
      <h2>{item.name}</h2>
      <div className={css.summary}>
        <p className={css.price}>${item.price}</p>
        <p className={css.amount}>x{item.count}</p>
      </div>
      <div className={css.actions}>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};
export default CartItem;
