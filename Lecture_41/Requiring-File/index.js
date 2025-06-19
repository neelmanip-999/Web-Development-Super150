// file 1

let pi = Math.PI;
console.log(pi);

// let ans = (num) => {return num * num};

let ans1 = num => num * num;
let ans2 = (a,b) => a + b;

console.log(ans1);
console.log(ans2);

// exports behaviour show karega becoz require dekh liya
// by default an empty object return karega

// module.exports = {}; // by default 

// whenever we require a file toh uska saara content pehle run hoga.

// module.exports = {pi, ans1, ans2}; // we can use this too. 
// if it is an object then why it is not a key-value pair.

module.exports = {
    pi: pi, // --> pi
    ans1: ans1,
    ans2: ans2
}

// when our key and value are same then ek baar likhne se bhi kaam kar jaayega

// whatever key we use here we need to use the same in the receiving file, and we can change the key to any other name.

