import React from 'react'

const CartContext = React.createContext({
    totalAmount:0
});

export const CartContextProvider = props => {


    return(
        <CartContext.Provider
        value={{
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext