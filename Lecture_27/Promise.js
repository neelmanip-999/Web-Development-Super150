// promise is a constructor function
// its objective is to create object
// we can create promise using new keyword
// promise accepts a callback function
// promise is a higher order function like map, reduce etc
// callback function inside promise accepts two arguments which is also a function that is resolve, reject. 
// 1st argument do the work when the condition is true --> resolve chalega
// 2nd argument do the work when the condition not met --> reject chalega
// .then, .catch, .finaaly is a higher order function which accepts a callback function.
// resolve will run then, reject will run catch, finally will run in every case.
// argument are passed while we are resolving , and rejecting will be catched inside the callback function of .then and .catch

// .then, .catch, .finally can run in any combination. agar reject or resolve nahi kiya toh finally bhi nahi chalega.

let p1 = new Promise(function(resolve, reject) {
    let data = "100 rupee";
    let error = "chal na";
    resolve(data);
});


