// Step 1: Import the 'give-me-a-joke' package
// This is a third-party Node.js package that helps us generate random jokes.
const joke = require('give-me-a-joke');

// Step 2: Call the function to get a random dad joke
// The getRandomDadJoke method takes a callback function as its argument.
// Once the joke is fetched, the callback function runs with the joke as a parameter.
joke.getRandomDadJoke(function(joke) {
    // Step 3: Print the joke to the console
    console.log(joke);
});
