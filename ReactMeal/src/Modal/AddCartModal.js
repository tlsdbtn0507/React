import ReactDOM from "react-dom";
import ModalContent from "./ModalContent";

import css from "../Css/Modal.module.css";

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

  const content = () =>
    !ctx.cart ? <></> : ctx.cart.map((e) => <CartItem item={e} key={e.id} />);

  const totalPrice = () =>
    !ctx.cart ? "" : ctx.cart.map((e) => e.price).reduce((a, b) => a + b, 0);

  const takeOrder = () => {
    console.log("Taking Order...");
    props.sendCloseEvent();
  };

  return (
    <div className={css.modal}>
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
    </div>
  );
};


const AddCartModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop sendCloseEvent={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      ,
      {ReactDOM.createPortal(
        <ModalContent sendCloseEvent={props.onCloseModal} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AddCartModal;
