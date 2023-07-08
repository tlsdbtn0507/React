import classes from '../../Css/HeaderCartButton.module.css'
import CartContext from '../../store/CartContext';
import CartIcon from '../CartIcon';

import {useContext} from 'react';


const HeaderCart = props => {

    const ctx = useContext(CartContext);

    return(
        <>
            <button className={classes.button}>
                <div className={classes.icon}><CartIcon/></div>
                 Your Cart
                <div className={classes.badge}>
                    {ctx.totalAmount}
                </div>
            </button>
        </>
    )

};

export default HeaderCart