import React from "react";

import "../../css/Modal.css";

const modal = (props) => {
  const classStyle = `Modal ${props.show ? "ModalShow" : "ModalClose"}`;

  return (
    <div className={classStyle}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
