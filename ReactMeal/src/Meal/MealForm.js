import { useState } from "react";
import css from "../Css/MealItemForm.module.css";
import Input from "./Input";

const MealForm = (props) => {
  const [cart, setCart] = useState({ count: 1 });

  const gotInput = (p) => {
    setCart({ count: p });
  };

  const sendCart = (e) => {
    e.preventDefault();
    props.sendCart(cart);
  };

  return (
    <form className={css.form}>
      <Input sendInput={gotInput} />
      <button onClick={sendCart}>+Add</button>
    </form>
  );
};

export default MealForm;
