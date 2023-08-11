import { useContext, useState } from "react";
import CartContext from "../store/CartContext";

import Checkout from "./Checkout";
import CartItem from "./CartItem";

import card from "../Css/Cart.module.css";
import css from "../Css/Modal.module.css";

const ModalContent = (props) => {
  const ctx = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const close = () => {
    props.sendCloseEvent();
  };

  const content = () =>
    !ctx.cart ? <></> : ctx.cart.map((e) => <CartItem item={e} key={e.id} />);

  const totalPrice = () =>
    !ctx.cart ? "" : ctx.cart.map((e) => e.price).reduce((a, b) => a + b, 0);

  const takeOrder = () => {
    console.log("Taking Order...");
    setShowCheckout(true);
  };

  const checkout = () =>
    showCheckout ? (
      <Checkout
        onCancel={() => {
          setShowCheckout(false);
        }}
      />
    ) : (
      <>
        {content()}
        <div className={card.total}>
          <p>TotalAmount</p>
          <p>${totalPrice().toFixed(2)}</p>
        </div>
        <div className={card.actions}>
          <button className={card.buttonArt} onClick={close}>
            Close
          </button>
          <button className={card.button} onClick={takeOrder}>
            Order
          </button>
        </div>
      </>
    );
  return <div className={css.modal}>{checkout()}</div>;
};

export default ModalContent;
