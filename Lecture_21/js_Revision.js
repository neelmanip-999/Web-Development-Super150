// var a = 10;
// function fun(){
//     console.log(a);  // undefined
//     var a = 20;
//     function foo(){
//         a++;
//         console.log(a); // NaN
//         var a = 30;
//     }
//     foo();
// }
// fun();

// console.log([] == 0); // true 
// console.log([] == []); // flase --> different address in heap

// // == compare after implicit type conversion in JS (pehle same data type mein leke aayega)
// // but we can stop this behaviour by applying (===).

// // implicit conversion done by eingine.
// // explicit conversion done by user.

// // 1 + "1" => "11" (implicit type conversion number to string).
// // 1 - "1" => 0 (implicit type conversion string to number).
// // (+) --> addition or concatenation (priority to concatination).

// //----------------------------------------------------------------------------------------

// // explicit type conversion

// // 1 +  + "6" --> 7 
// // console.log(1 + + "6"); --> 7 // explicit

// // Number --> Number()
// // String --> String()
// // Boolean --> Boolean()

// // if we apply +/- before anything it will convert it to Number --> explicit



// //----------------------------------------------------------------------------------------
// // Difference between Double Equal(==) and Triple Equal(===) ?
// // Ans --> // == compare after implicit type conversion in JS (pehle same data type mein leke aayega) but we can stop this behaviour by applying (===).


// // implicit conversion tabhi hoga jab different data type hon
// // 1 == "1" --> true
// // console.log([] == " "); // true

// // nonprimitive data type ko type conversion mein priority milti hai
// // means here [] empty array will convert in string.

// // let str = String([]);
// // console.log(str); // false

// // console.log(String("[]")); // []


// console.log(0 == ""); // true  (empty string to number)
// console.log(0 == "   "); // true

// // No ascii value in JS
// // no charecter in JS only string
// console.log("a" > "b"); //false
// console.log("b" > "a"); //true

// console.log("" == "   "); // false (as no type conversion)

// console.log([] == []); // false


// // Pass by value --> value jati hai address ki 
// // Pass by Reference --> value ka address jata hai

// // Primitive --> Pass by Value
// // Non Primitive --> Pass by Reference

// let num = Number("a");
// console.log(num); // NaN (Not a number)


 
// // Difference b/w undefinied, not defined, null ,NaN
// // when trying to convert "a" to number gives NaN(not a number).


// // NaN
// console.log(1+"a"); //1a
// var hu = "e";
// console.log(hu++); // NaN


// var lum = "11";
// var nlum = ++lum;
// console.log(++lum); // 13
// console.log(typeof(nlum)); // Number 



// console.log(neel); // undefined
// var neel = 10;
// console.log(neel); //10

// Question

fun(); // fun is not a function error will come
// TypeError
var fun = function(){  // function expression not hoisting
    console.log("Hello World");
}