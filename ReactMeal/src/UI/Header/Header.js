import classes from '../../Css/Header.module.css';

import MealsSummary from "../MealsSummary";
import HeaderCart from './HeaderCart';

const Header = props => {
    return(
        <>
            <header className={classes.header}>ReactMeals
                <HeaderCart/>
            </header>
                <div className={classes.mainImage}>
                    <img alt='meals' src='img/meals.jpg'></img>
                </div>
            <MealsSummary/>
        </>
    )
};

export default Header;