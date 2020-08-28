import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total =total + product.price;
    }
        
    
    return (
        <div className='order'>
            <h1>Order Summary </h1>
            <h2>Item Ordered: {cart.length}</h2> 
            <h3>total Price: {total}</h3>
            
    
        </div>
    );
};

export default Cart;