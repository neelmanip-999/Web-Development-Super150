const express = require('express'); // Importing the Express framework
const app = express(); // Creating an instance of Express application

// Route handler for GET request to root path '/'
app.get('/' , (req, res) => { // '/' is the root path, callback handles the request and sends a response
    res.send('<h3> ye mera "/" path hai </h3>') // Sending HTML response
}) 

// Route handler for GET request to '/cat'
app.get('/cat' , (req, res) => { 
    res.send('<h3> ye mera "/cat" path hai </h3>') // Sending HTML response
}) 

// Route handler for GET request to '/dog'
app.get('/dog' , (req, res) => {
    res.send('<h3> ye mera "/dog" path hai </h3>') // Sending HTML response
}) 

// Route handler for GET request to '/orange'
app.get('/orange' , (req, res) => {
    res.send('<h3> ye mera "/orange" path hai </h3>') // Sending HTML response
}) 

// Route handler for GET request to '/watermelon'
app.get('/watermelon' , (req, res) => {
    res.send('<h3> Laal hai poora thela laal hai </h3>') // Sending custom text response
}) 

// Wildcard route to handle all undefined paths (Bad Request/Error handling)
// This should always be the last route to catch all other unmatched requests
app.get('*' , (req, res) => {
    res.send(" abeeyy saaale ") // Sending fallback response
})

// Server setup: listening on port 8080
app.listen(8080 , () => {
    console.log("server connected at port 8080") // Logging when server starts successfully
})
