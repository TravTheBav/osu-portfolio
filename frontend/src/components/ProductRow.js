import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';
import SubTotal from './SubTotal';


function ProductRow({ product, total, setTotal }) {

    const maxQuantity = 10;
    const minQuantity = 0;
    const [quantity, setQuantity] = useState(0);

    // returns the total + price, rounded to 2 decimal places
    const formatTotal = (price) => {
        return (Number(total) + price).toFixed(2);
    }

    const increaseQuantity = () => {
        // increase the total by the price of one unit if the quantity was increased
        if (quantity < maxQuantity) {
            setTotal(formatTotal(product.price));
        }
        setQuantity(Math.min(quantity + 1, maxQuantity));
    }

    const decreaseQuantity = () => {
        // decrease the total by the price of one unit if the quantity was decreased
        if (quantity > minQuantity) {
            setTotal(formatTotal(-1 * product.price));
        }

        setQuantity(Math.max(quantity - 1, minQuantity));
    }
    
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