import { useState } from "react";
import css from "../Css/Input.module.css";

const Input = (props) => {
  const [inputNum, setInputNum] = useState(1);

  const getInputNum = (e) => {
    const val = e.target.value;

    setInputNum(val);
    props.sendInput(val);
  };

  return (
    <div className={css.input}>
      <label>Amount</label>
      <input type="number" value={inputNum} onChange={getInputNum} />
    </div>
  );
};

export default Input;
