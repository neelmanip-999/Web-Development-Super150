// Types of Scope in JavaScript:
// 1. Global Scope
// 2. Script Scope

// 3. Function Scope
// 4. Block Scope

// Case 1: Is your variable inside {}?
// If NOT inside {} --> Global, Script
  // Case 1.1: Which declarative is used?
    // var -> Global Scope
    // let, const -> Script Scope

// Case 2: Yes, it is inside {}
// This can be block, function, or global scope
// Consider control structures like if, else, for, while, do-while:
  // Is the {} because of a function?
    // If NOT because of a function:
      // var -> Global Scope
      // let, const -> Block Scope
    // If it IS because of a function:
      // var -> Function Scope
      // let, const -> Block Scope

// when the block and functional both come to the picture you see local block. 


// Global Scope
var globalVar = "I am global";
let scriptVar = "I am script scoped";
const scriptConst = "I am also script scoped";

function myFunction() {
  // Function Scope
  var functionVar = "I am function scoped";

  if (true) {
    // Block Scope inside a function
    var functionVarInsideBlock = "I am still function scoped";
    let blockLet = "I am block scoped";
    const blockConst = "I am also block scoped";

    console.log(blockLet); // Accessible here
    console.log(blockConst); // Accessible here
    console.log(functionVarInsideBlock); // Accessible here
  }

  console.log(functionVar); // Accessible here
  console.log(functionVarInsideBlock); // Accessible here
  // console.log(blockLet); // ReferenceError: blockLet is not defined
  // console.log(blockConst); // ReferenceError: blockConst is not defined
}

if (true) {
  // Block Scope outside a function
  var globalVarInsideBlock = "I am still global scoped";
  let blockLetOutsideFunction = "I am block scoped outside function";
  const blockConstOutsideFunction = "I am also block scoped outside function";

  console.log(globalVarInsideBlock); // Accessible here
  console.log(blockLetOutsideFunction); // Accessible here
  console.log(blockConstOutsideFunction); // Accessible here
}

console.log(globalVar); // Accessible here
console.log(scriptVar); // Accessible here
console.log(scriptConst); // Accessible here
console.log(globalVarInsideBlock); // Accessible here
// console.log(blockLetOutsideFunction); // ReferenceError: blockLetOutsideFunction is not defined
// console.log(blockConstOutsideFunction); // ReferenceError: blockConstOutsideFunction is not defined

myFunction();



// lexical scope 