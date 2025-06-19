// Step 1: Import the Express module
// 'require('express')' loads the express module and returns a function.
// This function is used to create an Express application instance.
const express = require('express'); // returns a function

// Step 2: Create an Express application by calling the function returned by 'require('express')'
// Calling this function returns a new Express app object which will be used to define routes,
// configure middleware, and listen for incoming requests.
const app = express(); // returns an entire new object (an instance of an Express application)

// Optional: You can log 'app' to see the object structure
// console.log(app); 

// Step 3: Start the server and make it listen on port 8080
// 'app.listen' is a method provided by the Express application instance.
// It starts the server and listens for incoming HTTP requests on the specified port.
// The second argument is a callback function which runs once the server starts successfully.

app.listen(8080, () => {
  console.log("Server connected at port 8080"); // This message confirms that the server is running
});

// Note:
// If you use only 'app.listen(8080)', the server will still start,
// but you won't see any message unless there's an error or you log it explicitly.
