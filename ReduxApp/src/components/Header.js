import classes from "../css/Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();

  const { isLogined } = useSelector((state) => state.auth);

  const confirmLogout = () => {
    isLogined ? dispatch(authAction.logout()) : dispatch(authAction.login());
  };

  const loginButtons = (
    <>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
    </>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLogined ? loginButtons : ""}
          <li>
            <button onClick={confirmLogout}>
              {isLogined ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
