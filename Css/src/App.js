import "./css/App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { useState } from "react";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      {showModal ? <Modal show={showModal} closed={closeModalHandler} /> : null}
      {showModal ? <Backdrop show={showModal} /> : null}
      <button className="Button" onClick={showModalHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
