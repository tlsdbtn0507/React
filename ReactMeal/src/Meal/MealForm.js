import { useRef, useState } from "react";
import css from "../Css/MealItemForm.module.css";
import Input from "./Input";

const MealForm = (props) => {
  const [cart, setCart] = useState({ count: 1 });
  const [isValid, setIsValid] = useState(true);
  const amountRef = useRef();

  const gotInput = (p) => {
    setCart({ count: p });
  };

  const sendCart = (e) => {
    e.preventDefault();
    props.sendCart(cart);
  };

  const inputObj = {
    ref: amountRef,
    id: `amount_${props.id}`,
    type: "number",
    min: "1",
    step: "1",
    defaultValue: "1",
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountRef.current.value;

    if (enteredAmount.trim().length === 0 || +enteredAmount < 1) {
      setIsValid(false);
      return;
    } else props.sendCart({ count: +enteredAmount });
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <Input sendInput={gotInput} label="Amount" input={inputObj} />
      <button onClick={sendCart}>+Add</button>
      {!isValid && <p>invalid amount</p>}
    </form>
  );
};

export default MealForm;
