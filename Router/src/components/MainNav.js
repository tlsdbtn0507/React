import { NavLink } from "react-router-dom";
import classes from "../css/MainNav.module.css";

const MainNav = () => {
  const style = ({ isActive }) => (isActive ? classes.active : "");

  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink className={style} to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={style} to="/products">
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNav;
