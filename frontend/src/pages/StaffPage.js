import React, { useState } from "react";
import StaffList from "../components/StaffList";


function StaffPage() {

    const [results, setResults] = useState([]);
    // prevents the button to generate users from being pressed more than once for each page load, so the API does not get bombarded
    const [buttonClicked, setButtonClicked] = useState(false);

    // calls the Random User Generator API to get 10 person objects
    async function generateRandomPeople() {
        
        if (buttonClicked === false) {
            setButtonClicked(true);
            const randomUserGenPath = "https://randomuser.me/api/?results=10"
            return fetch(randomUserGenPath)
                .then(response => response.json())
                .then(peopleData => {
                    setResults(peopleData.results);
                })
                .catch(error => console.error(error));
            
        }
        
    }

    return (
        <>
        <h2>Staff Members</h2>
        <article>
            <p>
                Want to see the geniuses behind this great website? Click on the button below to see all of our amazing staff (just kidding, these are fake people).
                This page uses the <a href="https://randomuser.me/documentation">Random User Generator API</a> to fill in the table of users with sample data. Each time
                the button is pressed, a request is made to the API, which generates data for a new person and sends it back to the browser. If everything is successful, a new
                row containing the data will be appended to the table. Otherwise, an error message will be displayed in the status box if the API could not process the request.
            </p>

            <button id="displayMember" onClick={generateRandomPeople}>display members</button>

            <table>
                <caption>Staff Members</caption>
                <thead>
                    <tr>
                        <th>portrait</th>
                        <th>name (email linked)</th>
                        <th>phone</th>
                        <th>time zone</th>
                    </tr>
                </thead>
                <StaffList staff={results}/>
            </table>
        </article>
        </> 
    );
}

export default StaffPage;
