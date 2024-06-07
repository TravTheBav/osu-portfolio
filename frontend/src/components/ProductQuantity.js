import React, { useState } from 'react';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';


function ProductQuantity({quantity, increaseQuantity, decreaseQuantity}) {
    
    return (
        <div className="flex justify-content-center align-items-center sm-gap">
            <RiAddFill className='highlightable' onClick={increaseQuantity} />
            {quantity}
            <RiSubtractFill className='highlightable' onClick={decreaseQuantity} />
        </div>
    );
}

export default ProductQuantity;
