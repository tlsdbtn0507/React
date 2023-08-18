import classes from "../Css/Checkout.module.css";
import { useContext, useState } from "react";
import cartContext from "../store/CartContext";
import Input from "./Input";

const Checkout = (props) => {
  const [btnAvail, setBtnAvail] = useState(false);
  const [toSendForm, setToSendForm] = useState({});

  const confirmHandler = async (event) => {
    event.preventDefault();

    const receiver = toSendForm.map((e) => {
      const returnOBJ = {};
      returnOBJ[e.type] = e.value;
      return returnOBJ;
    });

    const cart = ctx.cart.map((e) => {
      return { id: e.id, foodName: e.name, price: e.price, count: e.count };
    });

    const content = { receiver: Object.assign(...receiver), food: cart };

    try {
      const data = await fetch(
        "https://react-http-f3119-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify(content),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await data.json();
      return res;
    } catch (error) {}
  };

  const ctx = useContext(cartContext);

  const checkForms = (e) => {
    setBtnAvail(e);
  };

  const getForm = (forms) => {
    if (forms.every((e) => e.value !== "")) setToSendForm(forms);
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <Input sendFormValids={checkForms} sendForm={getForm} />
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button
          onClick={confirmHandler}
          className={classes.submit}
          disabled={!btnAvail}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
