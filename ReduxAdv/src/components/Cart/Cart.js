import Card from "../UI/Card";
import classes from "../../css/Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const { item } = useSelector((state) => state.cart);

  const content = item.map((e) => <CartItem key={e.id} item={e} />);

  const totalPrice = item.map((e) => e.totalPrice).reduce((a, b) => a + b, 0);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{content}</ul>
      <h3>totalPrice: $ {totalPrice}</h3>
    </Card>
  );
};

export default Cart;
