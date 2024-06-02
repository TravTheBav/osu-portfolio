import React from 'react';
import Match from './Match';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function MatchList({ matches, onDelete, onEdit }) {
    return (
        <table id="matches">
            <caption>Add and Edit Matches</caption>
            <thead>
                <tr>
                    <th>Civilization</th>
                    <th>Relics Captured</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {matches.map((match, i) => 
                    <Match 
                        match={match} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default MatchList;
