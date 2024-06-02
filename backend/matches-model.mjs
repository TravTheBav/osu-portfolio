// Models for the Match Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Cannot connect to the matches database (matches_db) on MongoDB server.' });
    } else  {
        console.log('Connected to the matches collection in the matches database (matches_db), on MongoDB server.');
    }
});

// SCHEMA: Define the collection's schema.
const matchSchema = mongoose.Schema({
	civilization:   { type: String, required: true },
	relicsCaptured: { type: Number, required: true },
	date:           { type: Date, default: Date.now, required: true}
});

// Compile the model from the schema 
// by defining the collection name "matches".
const matches = mongoose.model('Matches', matchSchema);


// CREATE model *****************************************
const createMatch = async (civilization, relicsCaptured, date) => {
    const match = new matches({ 
        civilization: civilization, 
        relicsCaptured: relicsCaptured, 
        date: date 
    });
    return match.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveMatches = async () => {
    const query = matches.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveMatchByID = async (_id) => {
    const query = matches.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteMatchById = async (_id) => {
    const result = await matches.deleteOne({_id: _id});
    return result.deletedCount;
};

// UPDATE model *****************************************************
const updateMatch = async (_id, civilization, relicsCaptured, date) => {
    const result = await matches.replaceOne({_id: _id }, {
        civilization: civilization,
        relicsCaptured: relicsCaptured,
        date: date
    });
    return { 
        _id: _id, 
        civilization: civilization,
        relicsCaptured: relicsCaptured,
        date: date
    }
}

// EXPORT the variables for use in the controller file.
export { createMatch, retrieveMatches, retrieveMatchByID, updateMatch, deleteMatchById }