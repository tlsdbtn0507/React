import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";

import classes from "../css/Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const confirmLogin = (e) => {
    e.preventDefault();
    dispatch(authAction.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={confirmLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={confirmLogin}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
