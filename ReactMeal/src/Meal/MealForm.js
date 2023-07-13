import css from "../Css/MealItemForm.module.css";
import Input from "./Input";

const MealForm = (props) => {
  const cart = { count: "1" };

  const gotInput = (p) => {
    cart.count = p;
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
