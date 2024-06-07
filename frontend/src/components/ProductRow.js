import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';
import SubTotal from './SubTotal';


function ProductRow({ product, key }) {

    const [quantity, setQuantity] = useState(0);
    const increaseQuantity = () => setQuantity(Math.min(quantity + 1, 10));
    const decreaseQuantity = () => setQuantity(Math.max(quantity - 1, 0));
    
    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2})}</td>
            <td><ProductQuantity quantity={quantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/></td>
            <td><SubTotal quantity={quantity} price={product.price} /></td>
        </tr>
    );
}

export default ProductRow;