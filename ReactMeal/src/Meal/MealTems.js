import { useContext } from "react";
import CartContext from "../store/CartContext";
import Card from "../Cart/Card";
import MealItemUl from "./MealItemUl";

import css from "../Css/AvailMeal.module.css";

const MealTems = (props) => {
  const { totalMeals } = useContext(CartContext);

  let content;

  if (totalMeals)
    content = totalMeals.map((e) => <MealItemUl meal={e} key={e.id} />);

  return (
    <div className={css.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </div>
  );
};

export default MealTems;
