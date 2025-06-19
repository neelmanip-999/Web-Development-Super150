// Higher order function

// 1. when you have two function funA,funB ,, assume that function b is sent as an argument to the the other function(funA) then, we say that the accepting function is your higher order function(funA) 

// 2. when i have an outer function and inside that function i have another function(inner) and i am returning the inner function than the outer function is known as higher order function.

// call back function --> when you send a function as an argument then the sent function is known as call back function.

// Note -->  In JS we can send function as an argument
// the nature of function is to return something by default it return undefined

//---------------------------------------------------------------------------------------//

function a(){
    var lol = 10;
    function b(){
        console.log(lol)
    }
    // b();
    return b; // not only function b is return but also lol will returned(ldv);
}
// Closures --> whenever we return a function it is never return alone it is always return with its lexical dependent enviroment(variable). (only return not called)

// we cant use access modifier like private, public in JS
// but we can acheive it using closure in js

