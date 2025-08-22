// Importing mongoose
const mongoose = require('mongoose')

// Connect to MongoDB (local instance at port 27017)
// 'nobita' is the database name. 
// If it already exists, Mongoose will connect to it.
// If it doesn’t exist, MongoDB will automatically create it once we insert some data.
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(()=>{
    console.log("✅ DB Connected Successfully");
})
.catch(()=>{
    console.log("❌ DB not connected");
})

/* -----------------------------------------------------------------------
   SCHEMA (Blueprint)
   -----------------------------------------------------------------------
   - Schema is a blueprint or structure that defines how a document (record) 
     inside a MongoDB collection should look.
   - It defines:
        → Field names
        → Field types (String, Number, Boolean, Date, etc.)
        → Additional rules (default values, required fields, validators)
   - Example: For a 'Movie', we want fields like name, rating, year, and isWatched.
-------------------------------------------------------------------------*/
const movieSchema = new mongoose.Schema({
    name : String,      // Movie name (e.g., "IronMan")
    rating : Number,    // Rating out of 10
    year : Number,      // Release year
    isWatched : Boolean // Whether the movie is watched or not
});


/* -----------------------------------------------------------------------
   MODEL (Class)
   -----------------------------------------------------------------------
   - A model is a JavaScript class created from a Schema.
   - It acts as a wrapper around the MongoDB collection.
   - Through a model we can:
        → Create new documents
        → Query documents
        → Update documents
        → Delete documents
   - Model naming convention:
        → Name must be singular (e.g., 'Movie')
        → First letter capitalized
        → Internally, MongoDB will convert it into a lowercase plural collection name.
          Ex: 'Movie' → 'movies' collection in MongoDB
-------------------------------------------------------------------------*/
const Movie = mongoose.model('Movie', movieSchema);

// console.log(Movie); // If we log it, we will see the model (class) details


/* -----------------------------------------------------------------------
   CREATING A DOCUMENT (Object)
   -----------------------------------------------------------------------
   - A model in JS behaves like a class, so we can create new objects from it.
   - Each object created from a model corresponds to one MongoDB document.
-------------------------------------------------------------------------*/
let ironMan = new Movie({
    name : "IronMan",
    rating : 9,
    year: 2025,
    isWatched : true
})

// console.log(ironMan); // Logs the object, not yet saved to DB


/* -----------------------------------------------------------------------
   SAVING TO DATABASE
   -----------------------------------------------------------------------
   - To permanently store a document in the database, we use `.save()`.
   - `.save()` is asynchronous and returns a promise.
   - Without saving, the object exists only in memory.
-------------------------------------------------------------------------*/
ironMan.save()
.then(()=> console.log("Movie saved successfully"))
.catch(err => console.log("Error while saving:", err));


/* -----------------------------------------------------------------------
   ALTERNATIVE METHODS TO SAVE (without explicitly calling .save())
   -----------------------------------------------------------------------
   - If we use:
        → Movie.create(document)
        → Movie.insertOne(document)
        → Movie.insertMany([documents])
     → The document(s) will be automatically saved into the database.
   - Advantage: Shorter syntax, no need to call `.save()` separately.
-------------------------------------------------------------------------*/
