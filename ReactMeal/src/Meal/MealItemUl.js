import classes from '../Css/MealItem.module.css';
import MealForm from './MealForm';

const MealItemUl = props => {

    const meal = props.meal;

    return(
        <>
        <div className={classes.meal}>
            <h3>{meal.name}</h3>
            <div className={classes.description}>{meal.description}</div>
            <div className={classes.price}>$ {meal.price}</div>
        </div>
        <MealForm/>
        </>
    )
}

export default MealItemUl;