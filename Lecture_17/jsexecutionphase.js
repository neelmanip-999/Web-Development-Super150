// redeclaration --> var -> yes, let -> no, const -> no
// reassign --> var , let --> yes,  const --> no
// 1. the shortest javascript code that exist is ---------------.(empty js file).
// 2. whenever a js code runs a global execution context (GEC) is created inside that GEC 
// we have two phases 
 // --> a. memory creation phase (MCP)
 // --> b. code execution phase (CEP)

 // --> 3. MCP runs when zero line of code is executed that is before the CEP phase, the role of MCP is to allocate memory
//   --> to all the variables
//   --> to all the functions

// --> 4. the role of CEP is to execute after MCP and to run the code line by line.
// --> 5. All the js code is getting executed because of call Stack, GEC is actually running inside the call Stack
// --> 6. whenever any function execute a new execution context is created and a name of the newly created execution context is same as that of the name of the function

//--> *7*  Whenever GEC is created along with that global object(window) is also created.

// function is pasted as it is in MCP
// MCP also watches variable but store it value as undefined(cause kyunki sirf memory allocate ho rahi hai).

// var a = 100;
// console.log(a);
// function sam(){
//     console.log("I am sam.");
// }
// sam();

var a = 100;
function sam(){
    var b = 200;
    console.log(b);
    function lol(){
      var c = 300;
      console.log(c);
    }
    lol();
}
console.log(a);
sam();








//----------------------------------------------------------------------------------
// // Point 1: Shortest JavaScript code is an empty file
// // An empty file has no lines of code to execute, so no output is produced.

// console.log("Step 1: Start JavaScript Execution Flow"); // Output: "Step 1: Start JavaScript Execution Flow"

// // Point 2: Global Execution Context (GEC) is created
// // Every JavaScript program starts with the creation of a GEC.

// // Point 3: Memory Creation Phase (MCP)
// // During MCP, memory is allocated for all variables and functions.
// // At this stage, variables are assigned `undefined`, and functions are stored as they are (entire function body).

// console.log("Step 2: Memory Creation Phase (MCP) begins"); // Output: "Step 2: Memory Creation Phase (MCP) begins"

// // Variable declarations
// var x;          // Memory for `x` is created and initialized to `undefined`.
// function sayHi() {
//   console.log("Hello from sayHi function!");
// } // Entire function `sayHi` is stored in memory as is.

// // Point 4: Code Execution Phase (CEP)
// // In this phase, code runs line by line, and values are assigned to variables.

// console.log("Step 3: Code Execution Phase (CEP) begins"); // Output: "Step 3: Code Execution Phase (CEP) begins"

// // Assigning values to variables during CEP
// x = 10;         // Variable `x` now holds the value 10.
// console.log("Value of x:", x); // Output: "Value of x: 10"

// // Call the `sayHi` function
// sayHi();        // Function execution creates a new execution context for `sayHi`

// // Point 5: Call Stack
// // The GEC runs inside the call stack. When `sayHi` is called, a new execution context is pushed onto the stack.

// function outerFunction() {
//   console.log("Inside outerFunction");

//   // Point 6: Nested Execution Context
//   function innerFunction() {
//     console.log("Inside innerFunction");
//   }

//   // Calling `innerFunction` creates a new execution context for it
//   innerFunction();
// }

// // Calling `outerFunction` creates a new execution context for it
// outerFunction(); // Output: "Inside outerFunction" followed by "Inside innerFunction"

// // Point 7: Global Object (window in browsers)
// // Along with the GEC, the global object is created. In browsers, this is `window`.

// console.log("Accessing Global Object: ", window); // Accessing global `window` object in browsers.
// console.log("Global Object contains `x`:", window.x); // Output: "Global Object contains `x`: 10"

// console.log("Step 4: End of Execution Flow"); // Output: "Step 4: End of Execution Flow"










// //----------------------------------------------------------------------------------------


// // Execution Flow Explanation:
// // Global Execution Context (GEC): Created as the code starts execution. It consists of:

// // Memory Creation Phase (MCP): Allocates memory for variables (undefined) and functions (entire function body).
// // Code Execution Phase (CEP): Runs code line by line and assigns values or executes functions.
// // Call Stack:

// // GEC is pushed to the call stack at the start.
// // Every function call creates a new execution context, pushed to the stack.
// // The context is popped from the stack when the function execution completes.
// // Global Object:

// // Created along with GEC.
// // In browsers, the window object acts as the global object.
// // Variables and functions declared in global scope are added as properties of the global object.