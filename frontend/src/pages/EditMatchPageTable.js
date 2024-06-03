import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditMatchPageTable = ({ matchToEdit }) => {
 
    const [civilization, setTitle] = useState(matchToEdit.civilization);
    const [relicsCaptured, setRelicsCaptured] = useState(matchToEdit.relicsCaptured);
    const [date, setDate] = useState(matchToEdit.date.slice(0, 10));
    
    const redirect = useNavigate();

    const editMatch = async () => {
        const response = await fetch(`/matches/${matchToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                civilization: civilization, 
                relicsCaptured: relicsCaptured, 
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Match was updated`);
        } else {
            const errMessage = await response.json();
            alert(`Match could not be updated. Response: ${response.status}. Error: ${errMessage.Error}`);
        }
        redirect("/matches");
    }

    return (
        <>
        <article>
            <h2>Edit an Age of Empires 4 match</h2>
            <p>Edit one of your previous matches here.</p>
            <table id="matches">
                <caption>Update desired fields.</caption>
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
                            value={civilization}
                            onChange={e => setTitle(e.target.value)} 
                            id="civilization" />
                    </td>

                    <td><label htmlFor="relicsCaptured">Relics (max 10)</label>
                        <input
                            type="number"
                            value={relicsCaptured}
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
                    <label for="submit">Update Match</label>
                        <button
                            type="submit"
                            onClick={editMatch}
                            id="submit"
                            className='no-margin'
                        >Update</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditMatchPageTable;