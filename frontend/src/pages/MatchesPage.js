import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MatchList from '../components/MatchList';
import { Link } from 'react-router-dom';

const backend_url = "https://osu-portfolio-backend.onrender.com"

function MatchesPage({ setMatch }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [matches, setMatches] = useState([]);

    // RETRIEVE the entire list of matches
    const loadMatches = async () => {
        const response = await fetch(`${backend_url}/matches`);
        const matches = await response.json();
        setMatches(matches);
    } 
    
    // UPDATE a single match
    const onEditMatch = async match => {
        setMatch(match);
        redirect(`${backend_url}/update`);
    }

    // DELETE a single match  
    const onDeleteMatch = async _id => {
        const response = await fetch(`${backend_url}/matches/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch(`${backend_url}/matches`);
            const matches = await getResponse.json();
            setMatches(matches);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the matches
    useEffect(() => {
        loadMatches();
    }, []);

    // DISPLAY the matches
    return (
        <>
            <h2>List of Matches</h2>
            <p>View all previously entered Age of Empires 4 matches.</p>
            <Link to={`${backend_url}/create`}>Add Match</Link>
            <MatchList 
                matches={matches} 
                onEdit={onEditMatch} 
                onDelete={onDeleteMatch} 
            />
        </>
    );
}

export default MatchesPage;