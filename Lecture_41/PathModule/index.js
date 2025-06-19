// ---------------------------------------------------
// const path = require("path");
// 'path' is a built-in Node.js module.
// It provides utilities for working with file and directory paths.
// It helps make your path operations (like joining, resolving, etc.) safe and OS-independent.

// 'require("path")' is used to import the 'path' module.
// This allows you to use all its methods, such as path.join(), path.resolve(), etc.

const path = require("path");

// ---------------------------------------------------
// let ans = path.join('///sam' , 'vohra//' , 'teaches/' , 'shahid' , 'manish')
// 'path.join()' joins all given path segments together using the correct file separator
// for the current operating system (e.g., '/' on UNIX, '\' on Windows).
// It also normalizes the path — removes extra slashes and resolves '.' and '..' if present.

// Breakdown of the input segments:
// '///sam'     --> treated as absolute path due to leading slashes, becomes '/sam'
// 'vohra//'    --> extra slashes are cleaned up
// 'teaches/'   --> normal segment
// 'shahid'     --> normal segment
// 'manish'     --> last segment

// The final path will be normalized as: '/sam/vohra/teaches/shahid/manish'

let ans = path.join('///sam' , 'vohra//' , 'teaches/' , 'shahid' , 'manish');

// ---------------------------------------------------
// console.log(ans);
// This prints the final joined and normalized path to the console.
// Output: '/sam/vohra/teaches/shahid/manish'

console.log(ans);

// ---------------------------------------------------
