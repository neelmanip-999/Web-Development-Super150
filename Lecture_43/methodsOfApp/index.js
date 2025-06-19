// used for making server
const express = require('express'); // Require the Express framework. 'express' is a function.

// Create an instance of the Express application. This 'app' object will be used to define routes and middleware.
const app = express(); // 'app' is an object of the Express application

// ==================================================================
// Uncomment the below block to use middleware for **all incoming requests**
// This middleware will run no matter what the URL path is.

// app.use((req, res) => { // Register middleware without a specific path
//     // 'req' is the request object that contains information about the HTTP request
//     // 'res' is the response object used to send back a response to the client

//     // console.log(req); // Uncomment to log the entire request object (not recommended in production)
//     // console.log(res); // Uncomment to log the entire response object (not recommended)

//     console.log('you made a request akshay'); // Just a log message to show middleware ran

//     // Send an HTML response back to the client
//     res.send('<h1>mummy meri shadi krdo may june july mei</h1>'); 
// });

// ==================================================================
// Middleware for a **specific path** only (in this case, '/middleware')
// This middleware will only run if the request path starts with '/middleware'

app.use('/middleware', (req, res) => { // Middleware function mounted only for '/middleware' path
    // console.log(req); // Can be used for debugging (currently commented out)
    // console.log(res);

    console.log('you made a request at specific path middlewae'); // Log to show this middleware was triggered

    // Send an HTML response
    res.send('<h1>horn ok please</h1>');
});

// Start the server on port 8080
app.listen(8080, () => {
    console.log("server connected at port 8080"); // Log message once server starts successfully
});
