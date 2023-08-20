import classes from "../Css/Checkout.module.css";
import { useState } from "react";

const Input = (props) => {
  const [inputObj, setInputObj] = useState([
    { type: "name", label: "Your Name", value: "", check: true },
    { type: "street", label: "Street", value: "", check: true },
    { type: "postal", label: "Postal Code", value: "", check: true },
    { type: "city", label: "City", value: "", check: true },
  ]);

  const setName = (e) => {
    const { id, value } = e.target;
    const obj = [...inputObj];
    const toChangeIndex = obj.findIndex((e) => e.type === id);
    if (value === "") {
      obj[toChangeIndex].check = false;
    } else {
      obj[toChangeIndex].check = true;
    }
    obj[toChangeIndex].value = value;
    setInputObj(obj);

    props.sendFormValids(inputObj.map((e) => e.check).every((e) => e === true));
    props.sendForm(
      inputObj.map((e) => {
        return {
          value: e.value,
          type: e.type,
        };
      })
    );
  };

  const content = inputObj.map((e) => (
    <div
      className={`${classes.control} ${
        e.check === true ? "" : classes.invalid
      }`}
      key={e.type}
    >
      <label htmlFor={e.type}>{e.label}</label>
      <input
        type="text"
        id={e.type}
        onChange={setName}
        onBlur={setName}
        value={e.value}
      />
      {e.check === true ? "" : `Please check your ${e.label}`}
    </div>
  ));

  return content;
};

export default Input;
