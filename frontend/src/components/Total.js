import React, { useState } from 'react';


function Total({total}) {
    return (
        <div className="align-right">
            ${total}
        </div>
    );
}

export default Total;