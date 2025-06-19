// Creating a Promise using the Promise constructor
let p1 = new Promise(function(resolve, reject) {

    // Define two variables for success and error simulation
    let data = "10 rupee";   // Represents successful data
    let error = "chala ja brother"; // Represents an error message

    // Calling 'resolve()' with the 'data' variable
    // This signals that the promise is fulfilled successfully
    resolve(data);  

    // ❗Important: Once `resolve()` is called, any code below it (like `reject()`) is ignored.
    // reject(error);  <-- This won't execute because `resolve()` was already called.
});

// Consuming the Promise
p1
.then(function(d) {
    // The '.then()' block runs when the promise is RESOLVED (fulfilled)
    console.log(d);  // Output: 10 rupee
})   
.catch(function(err) {
    // The '.catch()' block runs when the promise is REJECTED (failed)
    console.log(err);  // This won't run because `resolve()` was called earlier
})
.finally(function() {
    // The '.finally()' block runs **in all cases** (whether resolved or rejected)
    console.log("I will execute every time");  // Output: I will execute every time
});
