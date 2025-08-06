const socket = io(); 
// Initializes a socket.io connection with the server (makes the client ready to send/receive messages)

$('#chat-box').hide(); 
// Hides the chat interface initially, user must log in first to see it

$('#send-btn').on('click' , ()=>{ 
    // Event listener: When the "Send" button is clicked

    const msgText = $('#inp').val(); 
    // Gets the message from the textarea with id="inp"

    if(!msgText){
        return 
        // If the message is empty, do nothing and return
    }
    else{
        socket.emit('sam-msg' , {
            msg:msgText
        }) 
        // Sends the message to the server with the custom event name 'sam-msg'
    }

    $('#inp').val("") 
    // Clears the input box after sending the message
})

socket.on('received-msg' , (data)=>{ 
    // Listens for the 'received-msg' event from the server

    console.log(data); 
    // Logs the received data (which includes username and message)

    $('#chat').append(`<li class="border mt-2 p-2 rounded-pill"> 
        <span class="fw-bold"> ${data.username} </span> -> ${data.msg} </li>`) 
    // Appends the received message to the chat list in the UI
})


$('#login-btn').on('click' , ()=>{ 
    // Event listener: When the "Login" button is clicked

    const username = $('#username').val(); 
    // Gets the value entered in the username input field

    socket.emit('login' , {
        username:username 
    }) 
    // Sends a 'login' event to the server with the username

    $('#login').hide(); 
    // Hides the login section

    $('#chat-box').show(); 
    // Shows the chat section

    $('#username').val("") 
    // Clears the username input field
})
