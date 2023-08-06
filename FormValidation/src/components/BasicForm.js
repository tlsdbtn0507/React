import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const [btnAble, setBtnAble] = useState(false);

  const sendSubmitReq = (e) => {
    e.preventDefault();
    console.log(firstInput, secInput, mailInput);
  };

  const [firstBlur, firstOnchange, firstInput, firstValid, firstValidContent] =
    useInput();

  const [secBlur, secOnchange, secInput, secValid, secValidContent] =
    useInput();

  const [mailBlur, mailOnchange, mailInput, mailValid, mailValidContent] =
    useInput(false);

  useEffect(() => {
    if (firstInput !== "" && secInput !== "" && mailInput !== "") {
      setBtnAble(true);
    } else setBtnAble(false);
  }, [firstInput, secInput, mailInput]);

  return (
    <form onSubmit={sendSubmitReq}>
      <div className="control-group">
        <div className={firstValid ? "form-control" : "form-control invalid"}>
          <label htmlFor="name">First Name</label>
          <input
            value={firstInput}
            type="text"
            id="name"
            onBlur={firstBlur}
            onChange={firstOnchange}
          />
          {!firstValid && firstValidContent({ type: "name", detail: "first" })}
        </div>
        <div className={secValid ? "form-control" : "form-control invalid"}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={secInput}
            onBlur={secBlur}
            onChange={secOnchange}
          />
        </div>
        {!secValid && secValidContent({ type: "name", detail: "second" })}
        <div className={mailValid ? "form-control" : "form-control invalid"}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            value={mailInput}
            onBlur={mailBlur}
            onChange={mailOnchange}
          />
        </div>
        {!mailValid && mailValidContent()}
      </div>
      <div className="form-actions">
        <button disabled={!btnAble}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
