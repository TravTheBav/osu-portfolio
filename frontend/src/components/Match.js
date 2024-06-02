import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri';


function Match({ match, onEdit, onDelete }) {
    return (
        <tr>
            <td>{match.civilization}</td>
            <td>{match.relicsCaptured}</td>
            <td>{match.date.slice(5, 10) + '-' + match.date.slice(0, 4)}</td>

            {/* Update these icons to something that matches your style. */}
            <td class="align-center"><RiDeleteBin6Line className='highlightable' onClick={() => onDelete(match._id)} /></td>
            <td class="align-center"><RiEditLine className='highlightable' onClick={() => onEdit(match)} /></td>
        </tr>
    );
}

export default Match;