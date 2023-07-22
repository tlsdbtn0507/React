import ReactDOM from "react-dom";
import ModalContent from "./ModalContent";

import css from "../Css/Modal.module.css";

const BackDrop = (props) => {
  const close = () => {
    props.sendCloseEvent();
  };
  return <div className={css.backdrop} onClick={close}></div>;
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
