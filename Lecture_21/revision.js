// on converting the charecter to number it gives NaN
// but in JS their is nothing like Ascii but we have superset of it called unicode

// if we compare two string it will done on the basis of unicode.

let str = 'A';
let unicodeValue = str.charCodeAt(0);
console.log(unicodeValue); // Outputs 65


let unicodeValue1 = 65;
let character = String.fromCharCode(unicodeValue1);
console.log(character); // Outputs 'A'



