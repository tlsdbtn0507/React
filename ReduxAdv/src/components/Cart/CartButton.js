import { useDispatch, useSelector } from "react-redux";
import classes from "../../css/CartButton.module.css";
import { uiAction } from "../../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(uiAction.toggle());
  };

  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
