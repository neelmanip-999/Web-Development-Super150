// whenever you try to access a variable or a function even brfore its declaration/initialization then it is called hoisting

// it is a default behaviour of Js where all the declaration(class, variable, function) are move to the top of their scope.

// declaration --> memory allocate

// let, const ke case mein declaration se pehle use karne pe output undefined nahi aata or ek warning aati hai cannot access the variable before declaration
// let knows their is variable named a but still he say i dont access it before initializtion restriction hoti hai.(dead temporal zone) --> let, const --> output is value unavailable 


// var se declare karne pe agar declaration se pehle bhi output undefined aa jata hai.


console.log(a);  //undefined
var a = 1000;  //no problem 
// let a = 1000;
console.log(a);

// No Problem in term of Function
sam()
function sam(){
    console.log("I am JS Developer");
}

// Hoisting (general, DTZ)
// General hoisting --> var --> undefined
// Dead temporal zone --> let, const --> Value Unavailable

// what is difference bw general hoisting and dead temporal zone hoisting
//Great question! Let's break it down:

// General Hoisting
// In JavaScript, general hoisting refers to the process where variable and function declarations are moved to the top of their containing scope during the compilation phase. This allows you to use variables and functions before they are declared in the code. Here's an example:

console.log(foo); // Output: undefined
var foo = "bar";
console.log(foo); // Output: bar

// Temporal Dead Zone (TDZ) Hoisting
// The Temporal Dead Zone (TDZ) is a concept introduced with ES6 (ECMAScript 2015) for let and const variables. These variables are also hoisted to the top of their block scope, but the difference lies in how they behave before their initialization is actually encountered in the code. In the TDZ, the variables cannot be accessed and will throw a ReferenceError if you try to do so. Here's an example:

console.log(bar); // ReferenceError: bar is not defined
let bar = "baz";
console.log(bar); // Output: baz


// what is difference bw general hoisting and dead temporal zone hoisting
// Great question! Let's break it down:

// General Hoisting
// In JavaScript, general hoisting refers to the process where variable and function declarations are moved to the top of their containing scope during the compilation phase. This allows you to use variables and functions before they are declared in the code. Here's an example:

// javascript
// console.log(foo); // Output: undefined
// var foo = "bar";
// console.log(foo); // Output: bar
// Temporal Dead Zone (TDZ) Hoisting
// The Temporal Dead Zone (TDZ) is a concept introduced with ES6 (ECMAScript 2015) for let and const variables. These variables are also hoisted to the top of their block scope, but the difference lies in how they behave before their initialization is actually encountered in the code. In the TDZ, the variables cannot be accessed and will throw a ReferenceError if you try to do so. Here's an example:

// javascript
// console.log(bar); // ReferenceError: bar is not defined
// let bar = "baz";
// console.log(bar); // Output: baz
// In this case, the let variable bar is hoisted, but accessing it before its declaration results in a ReferenceError.

// Key Differences
// Behavior before Initialization:
// General Hoisting (var): Variables are initialized with undefined.
// TDZ Hoisting (let and const): Variables are in the Temporal Dead Zone and accessing them will throw a ReferenceError.
// Scope:
// General Hoisting (var): Function-scoped.
// TDZ Hoisting (let and const): Block-scoped.
// Re-declaration:
// General Hoisting (var): Allows re-declaration within the same scope.
// TDZ Hoisting (let and const): Does not allow re-declaration within the same scope.

