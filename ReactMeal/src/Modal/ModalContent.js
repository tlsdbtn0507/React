import { useContext } from "react";

import CartContext from "../store/CartContext";
import CartItem from "./CartItem";

import css from "../Css/Modal.module.css";
import card from "../Css/Cart.module.css";

const ModalContent = (props) => {
  const ctx = useContext(CartContext);

  const close = () => {
    props.sendCloseEvent();
  };

  const content = () =>
    !ctx.cart ? <></> : ctx.cart.map((e) => <CartItem item={e} key={e.id} />);

  const totalPrice = ctx.totalAmount;

  const takeOrder = () => {
    console.log("Taking Order...");
    props.sendCloseEvent();
  };

  return (
    <div className={css.modal}>
      <ul className={card[`cart-items`]}>{content()}</ul>
      <div className={card.total}>
        <span>TotalAmount</span>
        <p>${totalPrice}</p>
      </div>
      <div className={card.actions}>
        <button className={card.buttonArt} onClick={close}>
          Close
        </button>
        {totalPrice > 0 && (
          <button className={card.button} onClick={takeOrder}>
            Order
          </button>
        )}
      </div>
    </div>
  );
};
export default ModalContent;
