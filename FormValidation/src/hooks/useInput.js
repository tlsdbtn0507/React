import { useState } from "react";

const useInput = (validTypeIsName = true) => {
  const [inputData, setInputData] = useState("");
  const [validData, setValidData] = useState(true);

  const setInputBlur = (e) => {
    const target = e.target.value;
    if (
      validTypeIsName
        ? target.trim() === ""
        : !(target.includes("@") && target.includes("."))
    )
      setValidData(false);
    else {
      setInputData(target);
      setValidData(true);
    }
  };

  const setInputOnchange = (e) => {
    setInputData(e.target.value);
  };

  const validContent = (errObj) => {
    const content = validTypeIsName
      ? `Please type your ${errObj.detail} name!`
      : "Please Type Valid Email Address";

    return <p className="error-text">{content}</p>;
  };

  return [setInputBlur, setInputOnchange, inputData, validData, validContent];
};

export default useInput;
