import React, { useState, useEffect } from 'react'
import { DUMMY_MEALS } from '../Meal/dummy-meals';

const CartContext = React.createContext({
    totalAmount:0,
    totalMeals:null,
});

export const CartContextProvider = props => {
    //더미데이터를 로컬스토리지에 저장하고쓸것

    const [totalAmount, setTotalAmount] = useState();
    const [totalMeals, setTotalMeals] = useState();

    useEffect(()=>{
        
        const meals = JSON.parse(localStorage.getItem('meals'));

        if(!meals){
            localStorage.setItem('meals',JSON.stringify(DUMMY_MEALS));
        }
    
        setTotalAmount(meals.length);
        setTotalMeals(meals)
    },[])
    


    return(
        <CartContext.Provider
        value={{
            totalAmount:totalAmount,
            totalMeals:totalMeals
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext