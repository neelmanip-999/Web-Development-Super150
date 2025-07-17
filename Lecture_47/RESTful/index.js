// Import required modules
const express = require('express');          // Express framework for building the web server
const app = express();
const path = require('path');               // Built-in Node.js module for handling file paths
const methodOverride = require('method-override'); // Allows overriding HTTP methods (e.g., POST → PATCH/DELETE)
const { v4: uuid } = require('uuid');       // UUID library to generate unique IDs for blogs

// ------------------- DUMMY DATABASE -------------------
// Instead of a real database, we store blogs in an array
// Each blog has an id (generated using uuid), username, and comment
let comments = [
    { id: uuid(), username: "Akshay", comment: "kuch nhi" },
    { id: uuid(), username: "Sachin", comment: "kaun" },
    { id: uuid(), username: "Javed", comment: "laal hai" },
    { id: uuid(), username: "Ojaswa", comment: "Puls aagyi puls" }
];

// ------------------- APP CONFIGURATION -------------------
app.set('view engine', 'ejs');                        // Set EJS as the template engine
app.set('views', path.join(__dirname, 'views'));      // Path for EJS views folder
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files like CSS
app.use(express.urlencoded({ extended: true }));      // Middleware for parsing form data
app.use(methodOverride('_method'));                   // Allow PATCH & DELETE using query param (_method)

// ------------------- ROUTES -------------------

// Root route: simple message
app.get('/', (req, res) => {
    res.send("root mei aapka swagat hai"); // "Welcome to root"
});

// 1. Display all blogs
// Renders 'index.ejs' and passes the comments array
app.get('/blogs', (req, res) => {
    res.render('index', { comments });
});

// 2. Show form for adding a new blog
// Renders 'new.ejs' containing the input form
app.get('/blog/new', (req, res) => {
    res.render('new');
});

// 3. Add new blog (POST)
// Extracts username and comment from form data
// Pushes a new blog object into the comments array with a unique ID
app.post('/blogs', (req, res) => {
    let { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/blogs'); // Redirect back to blogs list
});

// 4. Show details of one blog
// Uses :id parameter to find a specific blog and render 'show.ejs'
app.get('/blogs/:id', (req, res) => {
    let { id } = req.params;
    let foundComment = comments.find(comment => comment.id == id);
    res.render('show', { foundComment });
});

// 5. Show form for editing a blog
// Finds the blog using its id and sends it to 'edit.ejs'
app.get('/blogs/:id/edit', (req, res) => {
    let { id } = req.params;
    let foundComment = comments.find(comment => comment.id == id);
    res.render('edit', { foundComment });
});

// 6. Update an existing blog (PATCH)
// Modifies the existing comment text with new data from the form
app.patch('/blogs/:id', (req, res) => {
    let { id } = req.params;
    let foundComment = comments.find(comment => comment.id == id);
    let { comment } = req.body;
    foundComment.comment = comment;
    res.redirect('/blogs');
});

// 7. Delete a blog (DELETE)
// Creates a new array excluding the blog with the given id
// Updates the comments array with this new array
app.delete('/blogs/:id', (req, res) => {
    let { id } = req.params;
    let newArray = comments.filter(comment => comment.id != id);
    comments = newArray;
    res.redirect('/blogs');
});

// ------------------- START SERVER -------------------
// The server runs on port 8080
app.listen(8080, () => {
    console.log("server running at port 8080");
});
