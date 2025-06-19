// foreach function hai loop nahi

let arr = [10, 20, 30, 40, 50];
// arr.forEach();
arr.forEach(function(item, index){
    console.log(item*item);
});

// foreach did not return anything
let ret = arr.forEach(function(item, index){
    return (item*item);
});
console.log(ret); // undefined




// MAP function ----------------------------------------------------------------------

let ans = arr.map(function(item, index){
    return item + index;
})
console.log(ans);

// Filter --------------------------------------------------------------------------

let arr1 = [10, 20, 25, 35, 50];

let return1 = arr1.filter(function(item, index){
    if(item % 10 == 0){
        return item; // only return the truthy value.
    }
    // if(item%10) --> falsy
}) 
console.log(return1);



// Reduce-----------------------------------------------------------------------------

// Example: Calculate the sum of all numbers in an array
const numbers = [1, 2, 3, 4, 5];

// reduce takes two arguments: a callback function and an initial value (optional)
// The callback receives an accumulator (current total) and the current element
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // Output: 15

// Explanation:
// 1st iteration: accumulator = 0, current = 1, result = 0 + 1 = 1
// 2nd iteration: accumulator = 1, current = 2, result = 1 + 2 = 3
// 3rd iteration: accumulator = 3, current = 3, result = 3 + 3 = 6
// 4th iteration: accumulator = 6, current = 4, result = 6 + 4 = 10
// 5th iteration: accumulator = 10, current = 5, result = 10 + 5 = 15
// Final output: 15


// Sort -------------------------------------------------------------------------

// Example: Sort an array of numbers in ascending order
const unsortedNumbers = [5, 3, 8, 1, 4];

// Provide a compare function to sort numerically
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);

console.log(sortedNumbers); // Output: [1, 3, 4, 5, 8]

// Explanation:
// The compare function compares two elements (a, b).
// If a - b is negative, a comes before b (ascending order).
// If a - b is positive, a comes after b.


// Every ------------------------------------------------------------------------------

// Example: Check if all numbers in an array are even
const numbers1 = [2, 4, 6, 8];

// every takes a callback that returns true or false for each element
const allEven = numbers1.every(num => num % 2 === 0);

console.log(allEven); // Output: true

// Explanation:
// Iterates through each element:
// 2 % 2 === 0 → true
// 4 % 2 === 0 → true
// 6 % 2 === 0 → true
// 8 % 2 === 0 → true
// All elements pass → returns true

// Some ---------------------------------------------------------------------------------

// Example: Check if there is any odd number in an array
const numbers2 = [2, 4, 5, 8];

// some takes a callback that returns true or false for each element
const hasOdd = numbers2.some(num => num % 2 !== 0);

console.log(hasOdd); // Output: true

// Explanation:
// Iterates through each element:
// 2 % 2 !== 0 → false
// 4 % 2 !== 0 → false
// 5 % 2 !== 0 → true (stops here since one element satisfies the condition)
// Returns true



