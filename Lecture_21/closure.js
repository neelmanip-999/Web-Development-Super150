// function fun(){
//     var a = 10;
//     var b = 20;
//     function foo(){
//         console.log(a); //10
//         console.log(b); //
//     }
//     foo();
// }
// fun();

// GEC vs LEC
// JAVA vs Js 
// Higher order function 

// function fun(){
//     var a = 10;
//     var b = 20;
//     function foo(){
//         console.log(a); //10
//         console.log(b); //
//     }
//     return foo;
// }
// let f = fun();  //foo()
// console.log(f); //foo()
// f(); //f is not a function


// scope --> area jnha tak aap kisi variable ko access kar sakte hn
// lexical --> relation 

// variable ka scope js mein tab decide hoga jab aapne usko banaya tha naki jab aap usko call karte hn


// closure --> function bundle together with its lexical enviroment or its lexical scope.

// the variable of lexical enviroment are stored in the form of object. --> an anonymous object it does not have a name so we can access it directly.

// this object can be accessed by its reference where it is used.

//closure is created when function is created



// function fun(){
//     var a = 10;
//     var b = 20;
//     function foo(){
//         ++a; // this value changes in closure outer function value remain same
//         ++b;
//         console.log(a); //10
//         console.log(b); //
//     }
//     return foo;
// }
// var f = fun();  // f have separate closure
// var f1 = fun(); // f1 have separate closure
// f(); // 11, 21
// f(); // 12, 22
// f1(); // 11, 21
// f1(); // 12, 22

// Note--> whenever we call a function ek naya closure banta hai.


// function fun() {
//     var a = 10;
//     var b = 20;
//     function foo() {
//         var c = 30;
//         var d = 40;
//         function chu() {
//             // var e = 50;
//             // var f = 60;
//             console.log(a);
//             console.log(c);
//         }
//         return chu;
//     }
//     return foo;
// }

// var f1 = fun(); // f1 is foo
// var f2 = f1(); // f2 is chu
// f2(); // This will call chu and print the values of a and c





function outer(){
    var a = 10;
    function inner(){
        a++;
        var b = 20;
        function innermost(){
            a++;
            b++;
            console.log(a);
            console.log(b);
        }
        return innermost;
    }
    return inner;
}


let f1 = outer(); //f1 --> inner
let f11 = f1(); // f11 --> innermost
f11(); // 12 21

let f12 = f1();
f12();  // 14 21


//Note --> jis scope ka closure bann chuka hai uska dubara nahi banega
// innermost ke closure me inner ka bhi closure aayega
// share the parent closure

// jiska closure pehlr bann chuka hai uska dubara nahi banega
// jitni barr function call hoga utni barr naya closure banega




// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.


// let ki bhi hoisting hoti hai but let ke case mein initializtion 2nd phase mein hota hai
// var ke case me hoisting hoti hai or initializtion 1st phase mein hi ho jati hai


