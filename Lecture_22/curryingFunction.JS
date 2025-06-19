// Currying Function
// if we convert a function who accepts multiple argument to a function who accept one argument is called currying function..
// made using of closure

function add(a){
    return function add2(b){
        return function add3(c){
            return a+b+c;
        }
    }
}

// console.log(add(5)(3)(2)); //10

// Normal Function
// function add(a, b, c){
//     return a+b+c;
// }


function addd(a){
    return function addd1(b){
        return function addd2(c){
            return function addd3(d){
                return function addd4(e){
                    return a+b+c+d+e;
                }
            }
        }
    }
}
// console.log(addd(1)(2)(3)(4)(5));


// partial application

let some = addd(1)(2)(3)(4);

let addd2 = addd(1);
let addd3 = addd2(2);


// only we have to change 5th argument then we use partial currying function

console.log(some(5)); //15
console.log(some(6)); //16
console.log(some(7)); //17
console.log(some(8)); //18





// Sorting 

let arr = ["1", "123", "2", "234", "1111"];
console.log(arr.sort()); // sort in lexicographical order


console.log(arr.sort((a,b) => a-b)); // Ascending Order, Sort in Numeric Manner

console.log(arr.sort((a,b) => b-a)); // Decending Order, Sort in Numeric Manner

