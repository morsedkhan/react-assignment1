import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, pdk) => total + pdk.price, 0)    
   let total = 0;

   for (let i = 0; i < cart.length; i++) {
       const product = cart[i];

       total = total + Number(product.price);
       
   }
   
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Iteam Order:{cart.length}</p>
             <p>Total Price:${total}</p>
        </div>
    );
};

export default Cart;