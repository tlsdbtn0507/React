import { useContext } from "react";
import classes from "../Css/MealItem.module.css";
import MealForm from "./MealForm";
import CartContext from "../store/CartContext";

const MealItemUl = (props) => {
  const ctx = useContext(CartContext);

  const meal = props.meal;

  const makeCart = (p) => {
    const cart = {
      ...meal,
      price: +p.count * meal.price,
      count: +p.count,
      // originalPrice: +meal.price,
    };

    // ctx.addCart(cart);
    ctx.addCart(cart);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>$ {meal.price}</div>
      </div>
      <MealForm id={meal.id} sendCart={makeCart} />
    </li>
  );
};

export default MealItemUl;
