import classes from "../Css/User.module.css";

const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};

export default User;
