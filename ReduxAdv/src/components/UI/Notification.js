import classes from "../../css/Notification.module.css";

const Notification = (props) => {
  const { status, title, message } = props.state;

  const cssClasses = `${classes.notification} ${
    status === "error" ? classes.error : classes.success
  }`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
