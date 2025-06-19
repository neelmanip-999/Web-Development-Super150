// what is prototype? 
// it is an object. ye khud ek object hai.
// prototype acts like a fallback source of your object
// jab koi property object ke andar nahi milti toh bydefault we get undefined
// whenever we call function which is not present in object then it goes to its fallback source that is prototype search and if not present their also then an error occur.

// __proto__ (dender proto) --> it will tell the callback source of an class matlab ki pitaji.

// null is a termination point iske upar kuch nahi hai.
// ans null is also an object.


// let obj = {
//     a : 10,
//     fn : function(){console.log("Hello")}
// }

// console.log(obj.a);
// console.log(obj.b);

// console.log(typeof null);

// console.log(obj.__proto__);

// console.log(obj.__proto__.__proto__ === null);

// console.log()

let arr = [10, 20, 30];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype)