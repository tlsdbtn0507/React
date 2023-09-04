import { Link } from "react-router-dom";
import classes from "../css/EventItem.module.css";

function EventItem({ event }) {
  function startDeleteHandler() {
    // ...
  }

  // const { id } = useParams();

  // const eventObj = EVENTS.find((e) => e.id === id);

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
