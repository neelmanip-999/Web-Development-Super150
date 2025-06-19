// Explanation of JavaScript's asynchronous behavior using setTimeout

// Example 1
console.log("Start");
setTimeout(function() {
    console.log("besharam"); // Executes after 5 seconds (5000ms)
}, 5000);
console.log("Tata"); // Prints immediately

// Example 2
setTimeout(function() {
    console.log("Hello after 2s"); // Executes after 2 seconds (2000ms)
}, 2000);
console.log("Balle Balle"); // Prints immediately

// Example 3 (Incorrect Usage)
setTimeout(function() {
    console.log("Hi after 1s");
}); // No delay provided, defaults to 0ms but still executed asynchronously

// Example 4 (Main Example)
console.log("Hello");
setTimeout(function() {
    console.log("I am amazon"); // Executes after 0ms but asynchronously
}, 0);
console.log("Bye");

/*
** Explanation **
- JavaScript is synchronous but handles asynchronous tasks using the **Event Loop**.
- `setTimeout` moves the callback to the **Task Queue**.
- Even if `setTimeout` has 0ms delay, it won't run immediately — the main thread must finish executing all synchronous code first.

** Output for Example 4:**
Hello
Bye
I am amazon

** Why? **
- `console.log("Hello")` runs immediately.
- `setTimeout` places its callback in the Task Queue with 0ms delay.
- The main thread continues and runs `console.log("Bye")`.
- After the main thread finishes, the Task Queue callback (`console.log("I am amazon")`) is executed. 
*/





/* callBack Queue(MacroTask Queue) , MicroTask Queue*/
