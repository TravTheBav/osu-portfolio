import React, { useState } from 'react';


function SubTotal({quantity, price}) {
    return (
        <div className="align-right">
            ${quantity * price}
        </div>
    );
}

export default SubTotal;