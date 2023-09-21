import React from "react";

import "../../css/Backdrop.css";

const backdrop = (props) => {
  const classStyle = `Backdrop ${
    props.show ? "BackdropShow" : "BackdropClose"
  }`;

  return <div className={classStyle}></div>;
};

export default backdrop;
