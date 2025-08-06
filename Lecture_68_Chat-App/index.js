const express = require('express'); 
// Importing the Express framework to handle routing and middleware

const app = express(); 
// Creating an instance of an Express app

const http = require('http'); 
// Importing Node's built-in HTTP module

const server = http.createServer(app); 
// Creating an HTTP server using the Express app as the request listener

const path = require('path'); 
// Importing 'path' module to work with directory and file paths

const socketio = require('socket.io'); 
// Importing the socket.io library for WebSocket communication

const io = socketio(server); 
// Creating a socket.io instance bound to the HTTP server


const users = {}; 
// An object to keep track of connected users (key: socket.id, value: username)


// Serve static files from the 'public' folder (HTML, CSS, JS files)
app.use('/' , express.static(path.join(__dirname , 'public')));


// Handle new socket connections
io.on('connection' , (socket)=>{
    console.log(`connection established at ${socket.id}`); 
    // Logs when a user connects with their unique socket ID

    // Listen for 'sam-msg' event sent from client
    socket.on('sam-msg' , (data)=>{
        // Broadcast the received message to all connected clients
        io.emit('received-msg' , {
            msg : data.msg,           // message content
            id : socket.id,           // ID of sender
            username : users[socket.id] // sender's username
        });
    }); 

    // Listen for 'login' event when a user logs in
    socket.on('login' , (data)=>{
        users[socket.id] = data.username; 
        // Save the username in the users object using socket.id as the key
    });
});


const port = process.env.PORT || 3000; 
// Use the environment's port if available, otherwise default to 3000

server.listen(port , ()=>{
    console.log(`server connected at port ${port}`); 
    // Start the server and log the port it's listening on
});
