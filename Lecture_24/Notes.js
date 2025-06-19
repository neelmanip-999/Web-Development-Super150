// The 'this' keyword in JavaScript depends on how a function is called.
// There are five different types of function calls where 'this' behaves differently:
// 1. Function Calling
// 2. Method Calling
// 3. Constructor Function Calling
// 4. Indirect Calling (call, apply, bind)
// 5. Arrow Functions

// ========================================================================
// 1. Function Calling (Direct function call)
// When a function is called directly, 'this' refers to the global object (window in browsers, global in Node.js).

function exampleFunction() {
    console.log(this); // In browsers, this will log 'window'.
}
exampleFunction();

// ========================================================================
// 2. Method Calling (Calling a function inside an object)
// When a function is a property of an object, 'this' refers to the object itself.

let obj = {
    a: 10,
    fn: function() {
        console.log(this); // 'this' refers to 'obj'
    }
};
obj.fn();

// Nested function inside a method
let obj1 = {
    a: 10,
    fun: function() {
        console.log(this, "1"); // 'this' refers to 'obj1'
        
        function nestedFunction() {
            console.log(this, "2"); // 'this' refers to 'window' (because it's a regular function call)
        }
        nestedFunction();
    }
};
obj1.fun();

// Assigning a method to a variable and calling it
let obj2 = {
    a: 10,
    fun: function() {
        console.log(this, "1"); // 'this' initially refers to 'obj2'
        function innerFunction() {
            console.log(this, "2"); // 'this' points to 'window'
        }
        innerFunction();
    }
};

let assignedFunction = obj2.fun; // Assigning method to a variable
assignedFunction(); // Here 'this' will refer to 'window' because it's a regular function call

// ========================================================================
// 3. Constructor Function Calling
// When using a constructor function with 'new', 'this' refers to the newly created object.

function Person() {
    this.name = "John";
    this.age = 30;
}
let person1 = new Person(); // 'this' points to person1
let person2 = new Person(); // 'this' points to person2

console.log(person1.name, person2.name);

// ========================================================================
// 4. Indirect Function Calling (Using call, apply, bind)
// 'this' can be explicitly set using call(), apply(), and bind().

let obj3 = {
    a: 10,
    fn: function() {
        console.log(this.a);
    }
};
let obj4 = { a: 50 };

obj3.fn(); // 'this' refers to obj3
// obj4.fn(); // This would give an error since 'fn' is not a method of obj4

// Using call() to change 'this'
obj3.fn.call(obj4); // 'this' now refers to obj4

// Function with parameters using call()
let obj3o = {
    a: 10,
    fn: function(x, y, z) {
        console.log(this.a, x, y, z);
    }
};
let obj4o = { a: 50 };

obj3o.fn.call(obj4o, 10, 20, 30); // Call: Pass parameters individually
obj3o.fn.apply(obj4o, [10, 20, 30]); // Apply: Pass parameters as an array

// Using bind() to create a copy of the function
let fnCopy = obj3o.fn.bind(obj4o, 10, 20, 30);
fnCopy(); // Now 'this' refers to obj4o

// ========================================================================
// 5. Arrow Functions and 'this'
// Arrow functions do not have their own 'this'. Instead, they inherit 'this' from their surrounding scope.

// Example 1: Regular function
function square(x) {
    return x * x;
}
console.log(square(7));

// Example 2: Arrow function (explicit return)
let square1 = (x) => {
    return x * x;
};
console.log(square1(7));

// Example 3: Arrow function (implicit return)
let square2 = (x) => x * x;
console.log(square2(7));

// Example 4: Arrow function with a single parameter (without parentheses)
let square3 = x => x * x;
console.log(square3(7));

// Arrow function inside a method
let obja = {
    a: 10,
    fun: function() {
        console.log(this); // 'this' refers to obja
        
        let arrowFunction = () => {
            console.log(this); // 'this' inherits from the surrounding function (obja)
        };
        arrowFunction();
    }
};
obja.fun();

// Case where 'this' refers to window
let objb = {
    a: 10,
    fun: function() {
        console.log(this); // 'this' refers to window when the function is assigned
        
        let arrowFunction = () => {
            console.log(this); // 'this' still refers to window
        };
        arrowFunction();
    }
};

let out = objb.fun;
out();

// Arrow function as a method (this behaves differently)
let objc = {
    a: 10,
    fun: () => {
        console.log(this); // 'this' is window, because arrow functions don't get their own 'this'
        
        let arrowFunction = () => {
            console.log(this); // 'this' still refers to window
        };
        arrowFunction();
    }
};
objc.fun();
