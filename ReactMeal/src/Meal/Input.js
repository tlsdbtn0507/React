import React, { useState } from "react";
import css from "../Css/Input.module.css";

const Input = React.forwardRef((props, ref) => {
  // const [inputNum, setInputNum] = useState(1);

  // const getInputNum = (e) => {
  //   const val = e.target.value;

  //   setInputNum(val);
  //   props.sendInput(val);
  // };

  return (
    <div className={css.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
