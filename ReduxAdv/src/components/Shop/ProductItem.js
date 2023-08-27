import Card from "../UI/Card";
import classes from "../../css/ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cartSlice";

const ProductItem = (props) => {
  const { title, price, description } = props;

  const dispatch = useDispatch();

  const addItemtoCartHan = () => {
    dispatch(cartAction.addItemToCart({ ...props, quantity: 1 }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemtoCartHan}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
