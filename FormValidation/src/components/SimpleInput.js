import { useState } from "react";

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [formValid, setFormValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputName.trim() === "") return setFormValid(false);

    console.log(inputName);
    setFormValid(true);
    setInputName("");
  };

  const setNameInput = (e) => {
    setInputName(e.target.value);
  };

  const blurNameInput = (e) => {
    const input = e.target.value;
    if (input.trim() !== "") {
      setInputName(input);
      setFormValid(true);
    } else setFormValid(false);
  };

  const validClass = formValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className={validClass}>
        <label htmlFor="name">Your Name</label>
        <input
          value={inputName}
          type="text"
          id="name"
          onChange={setNameInput}
          onBlur={blurNameInput}
        />
      </div>
      {!formValid && <p className="error-text">Input Must Not be Empty!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
