import ReactDOM from "react-dom";
import { useContext } from "react";
import CartContext from "../store/CartContext";

import CartItem from "./CartItem";

import css from "../Css/Modal.module.css";
import card from "../Css/Cart.module.css";

const BackDrop = (props) => {
  const close = () => {
    props.sendCloseEvent();
  };
  return <div className={css.backdrop} onClick={close}></div>;
};

const ModalContent = (props) => {
  const ctx = useContext(CartContext);

  const close = () => {
    props.sendCloseEvent();
  };

  const content = () => {
    if (ctx.cart === undefined) return <></>;
    else return ctx.cart.map((e) => <CartItem item={e} key={e.id} />);
  };

  const totalPrice = () => {
    if (ctx.cart === undefined) return "";
    else return ctx.cart.map((e) => e.price).reduce((a, b) => a + b, 0);
  };

  console.log(totalPrice().toFixed(2));

  return (
    <div className={css.modal} onClick={close}>
      {content()}
      <div className={card.total}>
        <p>TotalAmount</p>
        <p>${totalPrice().toFixed(2)}</p>
      </div>
      <div className={card.actions}>
        <button className={card.buttonArt} onClick={close}>
          Close
        </button>
        <button className={card.button}>Order</button>
      </div>
    </div>
  );
};

const AddCartModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop sendCloseEvent={props.closeModal} />,
        document.getElementById("backdrop-root")
      )}
      ,
      {ReactDOM.createPortal(
        <ModalContent sendCloseEvent={props.closeModal} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AddCartModal;
