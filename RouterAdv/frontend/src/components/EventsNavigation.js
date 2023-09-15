import { NavLink, useRouteLoaderData } from "react-router-dom";
import classes from "../css/EventsNavigation.module.css";

function EventsNavigation() {
  const style = ({ isActive }) => (isActive ? classes.active : "");

  const loginCheck = useRouteLoaderData("root");
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={style} to="/events/" end>
              All Events
            </NavLink>
          </li>
          {loginCheck && (
            <li>
              <NavLink className={style} to="/events/new">
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
