let express =  require('express'); // Importing the Express module
let app = express(); // Creating an instance of an Express application

// Route for the root path '/'
app.get('/' , (req, res) => {
    res.send('root route hai') // Sending plain text response
})


// ======================= Specific Subreddit Routes (Commented Out) =======================

// The following routes are hardcoded for each subreddit, which is not scalable:

// app.get('/r/banana' , (req,res)=>{
//     res.send('banana route hai') // Responds specifically to /r/banana
// })

// app.get('/r/orange' , (req,res)=>{
//     res.send('orange route hai') // Responds specifically to /r/orange
// })

// app.get('/r/cat' , (req,res)=>{
//     res.send('cat route hai') // Responds specifically to /r/cat
// })

// app.get('/r/dog' , (req,res)=>{
//     res.send('cat route hai') // Note: probably meant to say 'dog route hai'
// })

// Comment remark:
// infinite routes banane padh jaenge???? --> Yes, defining individual routes for each subreddit is not scalable.


// ======================= Dynamic Subreddit Route =======================

// This route dynamically handles any /r/:subreddit URL
app.get('/r/:subreddit' , (req, res) => {
   console.log(req.params); // Logs the route parameter object to the console, e.g., { subreddit: 'banana' }
   
   let { subreddit } = req.params; // Object destructuring to extract the 'subreddit' value from req.params
   
   // Sending dynamic HTML response based on subreddit name
   res.send(`<h2> my route was ${subreddit} </h2>`)
})


// Starting the server on port 8080
app.listen(8080 , () => {
    console.log('server running at port 8080') // Logs confirmation message when server is up
})
