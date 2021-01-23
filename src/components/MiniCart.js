import React, { useContext } from 'react'
import ShoppingCart from '../contexts/ShoppingCart'

export default () => {
    const cartItems = useContext(ShoppingCart);

    return (
        <>
            <h1>Shopping Cart!</h1>
            {cartItems.map((item, i) => (
            <div>
                <h2>{item.title} </h2>
                <p>{item.brand} </p>
                <p>{item.price} </p>
            </div>
            ))}
        </>
    );
   
}
