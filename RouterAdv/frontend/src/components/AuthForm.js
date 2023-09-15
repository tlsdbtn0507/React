import { Form, Link, useActionData, useSearchParams } from "react-router-dom";

import classes from "../css/AuthForm.module.css";

function AuthForm() {
  const [searchParam] = useSearchParams();

  const data = useActionData();

  const isLogin = searchParam.get("mode") === "login";

  const errDiv = data && data.errors && (
    <ul>
      {Object.values(data.errors).map((err) => (
        <li style={{ color: "red" }} key={err}>
          {err}
        </li>
      ))}
    </ul>
  );

  const errMsg = data && data.errors && (
    <p style={{ color: "red" }}>{data.message}</p>
  );
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {errDiv}
        {errMsg}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
