// array --> iterable --> for-of
// object --> not iterable --> for-in


let arr = [10, 20, 30, 40];
// for-of --> iterable
for(let item of arr){
    console.log(item);
}

let obj = {
    a : 10,
    b : 20,
    c : 30
}
// for-in --> uniterable ☠
for(let item in obj){
    console.log(item);
    console.log(obj[item]); 
}
