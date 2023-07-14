import ReactDOM from "react-dom";
import css from "../Css/Modal.module.css";

const BackDrop = (props) => {
  const close = () => {
    props.sendCloseEvent();
  };
  return <div className={css.backdrop} onClick={close}></div>;
};

const ModalContent = (props) => {
  const close = () => {
    props.sendCloseEvent();
  };
  return <div className={css.modal} onClick={close}></div>;
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
        <ModalContent />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AddCartModal;
