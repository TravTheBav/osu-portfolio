import React, { useState } from 'react';


function SubTotal({quantity, price}) {
    return (
        <div className="align-right">
            ${(quantity * price).toFixed(2)}
        </div>
    );
}

export default SubTotal;