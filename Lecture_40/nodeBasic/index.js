// ---------------------------------------------
// process.argv is an array provided by Node.js.
// It contains the command-line arguments passed when running a script.
// The first two elements are always:
// process.argv[0] -> the path to Node.js executable
// process.argv[1] -> the path to the script file
// process.argv[2] onwards -> the actual arguments provided by the user
// ---------------------------------------------

// Example:
// If you run: node script.js apple banana
// process.argv will be: ['path/to/node', 'path/to/script.js', 'apple', 'banana']

// ---------------------------------------------

// let arr = process.argv.pop();
// pop() removes the **last** element of the array and returns it.
// But doing this modifies the original process.argv array.
// In most cases, we **don’t** want to mutate it directly.
// console.log(arr)

// ---------------------------------------------

// let arr = process.argv.slice(2);
// slice(2) returns a new array starting from index 2 (i.e., user-provided arguments).
// It's the safe and recommended way to get user input from the command line.
// console.log(arr);

// ---------------------------------------------

// for(let i of arr){
//     console.log(`hello from ${i}`);
// }
// This loop goes through each item in `arr` (i.e., each user input)
// and prints a custom message for it.

// ---------------------------------------------

// console.log(process.argv)
// This prints the entire process.argv array to see all command-line arguments.

// ---------------------------------------------

// The current working code:
const arr = parseInt(process.argv.pop()); 
// process.argv.pop() removes the **last** item from process.argv array
// and returns it. We assume it's a number input from the user.
// parseInt() converts that string into an integer.
// ⚠️ This mutates process.argv and may not be the best practice.
// Also, parseInt may return NaN if input is not a number.

console.log(arr); // Prints the parsed integer from command-line input

// ---------------------------------------------

// The following loop is commented, but if uncommented,
// it would print all numbers from 0 to the input number.

// for(let i=0; i<=arr; i++){
// 	console.log(i);
// }

// ---------------------------------------------
