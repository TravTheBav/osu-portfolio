import React, { useState } from 'react';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';


function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const increaseQuantity = () => setQuantity(Math.min(quantity + 1, 10));
    const decreaseQuantity = () => setQuantity(Math.max(quantity - 1, 0));

    return (
        <div className="flex justify-content-center align-items-center sm-gap">
            <RiAddFill className='highlightable' onClick={increaseQuantity} />
            {quantity}
            <RiSubtractFill className='highlightable' onClick={decreaseQuantity} />
        </div>
    );
}

export default ProductQuantity;
