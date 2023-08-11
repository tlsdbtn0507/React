import classes from "../Css/Checkout.module.css";
import { useContext, useState } from "react";
import cartContext from "../store/CartContext";

const Checkout = (props) => {
  const [nameInput, setNameInput] = useState("");

  const confirmHandler = (event) => {
    event.preventDefault();
    console.log(nameInput);
  };

  const ctx = useContext(cartContext);

  const handleName = (e) => {
    const target = e.target.value;
    setNameInput(target);
  };

  const setName = (e) => {
    const target = e.target.value;
    // setNameInput(target);
    console.log(target);
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleName}
          onBlur={setName}
          value={nameInput}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
