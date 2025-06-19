// Importing express module
const express = require('express')

// Creating an instance of express app
const app = express();

// Importing path module to work with file and directory paths
const path = require('path');

// Setting the view engine to 'ejs' for rendering templates
app.set('view engine' , 'ejs');

// Setting the directory where the EJS templates (views) are stored
app.set('views' , path.join(__dirname , 'views')); // 'views' folder contains .ejs files

// Serving static files (like CSS, JS, images) from the 'public' folder
app.use(express.static(path.join(__dirname , 'public'))); // 'public' folder contains static assets

// Middleware to parse URL-encoded data from forms (for POST requests)
app.use(express.urlencoded({ extended: true })) // Form data will be available in req.body

// Middleware to parse JSON data (useful for APIs)
app.use(express.json()); // Allows Express to handle JSON data

// Route to handle the home page — renders 'index.ejs'
app.get('/' , (req,res)=>{
    res.render('index'); // Sends the index.ejs file from views folder
})

// Route to handle GET request from the form
app.get('/user' , (req,res)=>{
    // Extracting 'username' and 'age' from query string in the URL (GET form submission)
    let {username , age} = req.query;

    // You can use the data here (e.g., store it, display it, etc.)
    res.send('get request sent successfully') // Sending response back to client
})

// Route to handle POST request from the form
app.post('/user' , (req,res)=>{
    // Logging the form data sent via POST method (available in req.body)
    console.log(req.body);

    // Sending confirmation response back to client
    res.send('post method ke through')
})

// Starting the server at port 8080
app.listen(8080 , ()=>{
    console.log("server connected at port 8080") // Message printed when server starts successfully
})
