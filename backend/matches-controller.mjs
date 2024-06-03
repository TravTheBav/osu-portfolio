// Controllers for the Match Collection

import 'dotenv/config';
import express from 'express';
import * as matches from './matches-model.mjs';
import cors from 'cors';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.
app.use(cors());


// CREATE controller ******************************************
app.post ('/matches', (req,res) => { 
    matches.createMatch(
        req.body.civilization, 
        req.body.relicsCaptured, 
        req.body.date
        )
        .then(match => {
            console.log(`A new match has been created.`);
            res.status(201).json(match);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to create a new match.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/matches', (req, res) => {
    matches.retrieveMatches()
        .then(matches => { 
            if (matches !== null) {
                console.log('All matches were retrieved from the collection.');
                res.json(matches);
            } else {
                res.status(404).json({ Error: 'Page not found: make sure URL is correct' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad request: Failed to retrieve all matches.' });
        });
});


// RETRIEVE by ID controller
app.get('/matches/:_id', (req, res) => {
    matches.retrieveMatchByID(req.params._id)
    .then(match => { 
        if (match !== null) {
            console.log(`Match was retrieved.`);
            res.json(match);
        } else {
            res.status(404).json({ Error: 'Page not found: make sure URL is correct' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad request: Failed to retrieve match. Make sure the match id is correct.' });
    });

});


// UPDATE controller ************************************
app.put('/matches/:_id', (req, res) => {
    matches.updateMatch(
        req.params._id, 
        req.body.civilization, 
        req.body.relicsCaptured, 
        req.body.date
    )
    .then(match => {
        console.log('Match was updated.');
        res.json(match);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad request: Failed to update match. Make sure the match id is correct.' });
    });
});


// DELETE Controller ******************************
app.delete('/matches/:_id', (req, res) => {
    matches.deleteMatchById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} match was deleted.`);
                res.status(200).send({ Success: 'match was deleted' });
            } else {
                res.status(404).json({ Error: 'Could not delete the match from the collection.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Bad request: No match was deleted. Make sure the match id is correct' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});