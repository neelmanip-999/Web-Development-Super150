// Import the Express framework
// Express is used to create a web server and handle HTTP requests
const express = require('express');

// Create an instance of an Express application
const app = express();

// Import the 'path' module (built-in Node.js module)
// Used for handling and transforming file paths
const path = require('path'); // No need to install separately


// ------------------- DUMMY DATA -------------------
// Instead of using a database, we're creating an in-memory array
// 'comments' array will store blog objects with id, username, and comment
let comments = [
    { id: 0, username: "Akshay", comment: "kuch nhi" },
    { id: 1, username: "Sachin", comment: "kaun" },
    { id: 2, username: "Javed", comment: "laal hai" },
    { id: 3, username: "Ojaswa", comment: "Puls aagyi puls" }
];


// ------------------- APP CONFIGURATION -------------------

// Set the view engine to EJS (Embedded JavaScript templates)
// This allows us to render dynamic HTML templates using EJS syntax
app.set('view engine', 'ejs');

// Set the directory for views (templates)
// path.join ensures correct file path for all operating systems
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder
// This is for CSS, images, JS files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse incoming form data (URL-encoded data)
// Needed to access form inputs from 'req.body'
app.use(express.urlencoded({ extended: true }));


// ------------------- ROUTES -------------------

// Root route: Respond with a simple text message
app.get('/', (req, res) => {
    res.send("root mei aapka swagat hai"); // Means "Welcome to root"
});


// Task 1: Display all blogs
// Renders the 'index.ejs' template and passes the 'comments' array to it
app.get('/blogs', (req, res) => {
    res.render('index', { comments });
});


// Task 2: Show a form for adding a new blog
// Renders the 'new.ejs' template containing the form
app.get('/blog/new', (req, res) => {
    res.render('new');
});


// Task 3: Handle form submission and add a new blog
// Extracts 'username' and 'comment' from form data
// Pushes a new object into the 'comments' array with a new 'id'
// After adding, redirects back to '/blogs' (GET request)
app.post('/blogs', (req, res) => {
    let { username, comment } = req.body; // Destructuring form data
    comments.push({ username, comment, id: comments.length }); // Adds new blog
    res.redirect('/blogs'); // Redirect to the blogs listing page
});


// Task 4: Show details of a single blog
// Extracts 'id' from the URL parameters
// Finds the comment object with matching id from the 'comments' array
// Renders 'show.ejs' template and passes the found object to it
app.get('/blogs/:id', (req, res) => {
    let { id } = req.params; // Get 'id' from URL
    let foundComment = comments.find(comment => comment.id == id); // Find by id
    res.render('show', { foundComment }); // Render details page
});


// ------------------- START SERVER -------------------
// The server listens on port 8080
// Console message confirms the server is running
app.listen(8080, () => {
    console.log("server running at port 8080");
});
