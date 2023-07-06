import React, {useContext} from 'react';
import Card from '../UI/Card/Card';
import classes from '../../css/Home.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/authContext';


const Home = () => {
  const ctx = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
