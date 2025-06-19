// ---------------------------------------------
// console.log(process.cwd());
// process.cwd() stands for "Current Working Directory".
// It returns the directory from where the Node.js process was launched.
// This is **dynamic**, meaning it depends on where you run the file from.

// Example:
// If your file is at: /Users/you/Desktop/project/index.js
// And you run it from: /Users/you/Desktop
// Then process.cwd() will return: /Users/you/Desktop

console.log(process.cwd());

// ---------------------------------------------
// console.log(__dirname);
// __dirname is a special variable in Node.js.
// It returns the absolute path of the directory where the current script file **physically exists**.
// This is **static**, meaning it doesn’t change no matter where you run the script from.

// Example:
// If your file is at: /Users/you/Desktop/project/index.js
// __dirname will always return: /Users/you/Desktop/project

console.log(__dirname);

// ---------------------------------------------
