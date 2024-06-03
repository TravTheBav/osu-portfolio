import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddMatchPageTable = () => {

    const [civilization, setCivilization] = useState('');
    const [relicsCaptured, setRelicsCaptured] = useState('');
    const [date, setDate] = useState('');
    
    const redirect = useNavigate();

    const addMatch = async () => {
        const newMatch = { civilization, relicsCaptured, date };
        const response = await fetch('/matches', {
            method: 'post',
            body: JSON.stringify(newMatch),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Match was added`);
        } else {
            alert(`Match was not added to the matches collection. Response: ${response.status}`);
        }
        redirect("/matches");
    };


    return (
        <>
        <article>
            <h2>Add an Age of Empires 4 match</h2>
            <p>Create a new match entry here. Enter the civilization you played as, the number of relics you captured, and
                the date of the match.</p>
            
            <table id="matches">
                <caption>Which match are you adding?</caption>
                <thead>
                    <tr>
                        <th>Civilization</th>
                        <th>Relics</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label htmlFor="civilization">Civilization (2 to 30 chars)</label>
                        <input
                            type="text"
                            placeholder="English"
                            value={civilization}
                            minLength={2}
                            maxLength={30}
                            onChange={e => setCivilization(e.target.value)} 
                            id="civilization" />
                    </td>

                    <td><label htmlFor="relicsCaptured">Relics (max 10)</label>
                        <input
                            type="number"
                            value={relicsCaptured}
                            placeholder="0"
                            min="0"
                            max="10"
                            onChange={e => setRelicsCaptured(e.target.value)} 
                            id="relicsCaptured" />
                    </td>

                    <td><label htmlFor="date">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label htmlFor="submit">Add Match</label>
                        <button
                            type="submit"
                            onClick={addMatch}
                            id="submit"
                            className='no-margin'
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddMatchPageTable;