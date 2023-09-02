import { Link, useParams } from "react-router-dom";
import classes from "../css/EventItem.module.css";
import { EVENTS } from "../routes/EventRoot";

function EventItem({ event }) {
  function startDeleteHandler() {
    // ...
  }

  const { id } = useParams();

  const eventObj = EVENTS.find((e) => e.id === id);
  console.log(eventObj);

  return (
    <article className={classes.event}>
      {/* <img src={event.image} alt={event.title} /> */}
      <h1>{eventObj.title}</h1>
      <time>{eventObj.date}</time>
      <p>{eventObj.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
