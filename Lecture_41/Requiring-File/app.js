// File 2
// we want to require the file1 in the same directory

const file1 = require('./index.js'); // require the file1
// by default index.js file is acting like an module it means ki module ki tarah cheejein extract ho rahi hongi

console.log(file1);
// we override the empty object.
// it by default export an empty object

console.log(file1.pi); // 3.14
console.log(file1.ans1(5)); // 25
console.log(file1.ans2(5, 10)); // 15


// Destructuring
const {pi, ans1, ans2} = require('./index.js'); 
// const {pi : hello, ans1, ans2} = require('./index.js'); 

console.log(pi); // 3.14
console.log(ans1(5)); // 25
console.log(ans2(5, 10)); // 15






