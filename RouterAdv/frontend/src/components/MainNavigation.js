import classes from "../css/MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  const style = ({ isActive }) => (isActive ? classes.active : "");

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={style} to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={style} to="/events">
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
