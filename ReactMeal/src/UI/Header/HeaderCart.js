import classes from '../../Css/HeaderCartButton.module.css'
import CartIcon from '../CartIcon';


const HeaderCart = props => {


    return(
        <>
            <button className={classes.button}>
                <div className={classes.icon}><CartIcon/></div>
                 Your Cart
                <div className={classes.badge}>
                    {0}
                </div>
            </button>
        </>
    )

};

export default HeaderCart