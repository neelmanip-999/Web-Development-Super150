let person = {
    naam : "Sam",
    umar : 100,
    favColor : "black"
}
// to prevent the direct changes in an object
Object.freeze(person);

// console.log(person.umar);
// console.log(person.naam);
// console.log(person.favColor);

console.log(person);
// change the object value
person.naam = "neelmani";

// creating a new object
person.isMale = true;

// deleting an object
delete person.favColor;
console.log(person);


// function inside an object is called method

// the nature of function is to return something
// if i dont return anything in function than by default it return "undefined".

let person1 = {
    naam : "sam",
    umar : 100,
    favColor : "black",
    greet : function(){
        console.log("hello");
    }
}

// function definition
function samarth(){
    console.log("main hun gian");
    return "juice pilado"
}
// function calling 
samarth(); // main hun gian
console.log(samarth()); // juice pilado

samarth();


// parameterized function
function sunio(x, y){ // parameter
    console.log(y);
    return y;
    
}
// console.log(sunio(10)); // argument
console.log(sunio(10, "sam") , "y");


// -----------------------------------------------------------------------------------
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();



function gian(x, y){
    // console.log(x + y); // NaN --> not a number
    console.log(x);
    console.log(y);
}
gian(10); 

console.log();
console.log(typeof(NaN)); // Number

console.log(0.1 + 0.2); // 0.3000000000000004  --> 



// default parameterized function
function gian(x = 100, y = 200){ 
    console.log(x);
    console.log(y);
    console.log(x + y);
}
gian(); 
gian(50); 

// argument overwrite parameterized function
console.log();
console.log();
console.log();
console.log();

let person2 = {
    naam : "mitthu don",
    kaam : "juice pilana",
    profession : " boxing + cat_Walk",
    greet : function mitthu(){  // wether you write a function name or not write does'nt effect 
        // console.log("ye gareeb inki kismat acchi hojaye");
        console.log(`hello from ${person.naam}`);
        console.log(`hello from ${this.naam}`);
    }
}
// this keyword jis function  ke andar hai woh function jis object ke andar hai ye this uss
// object ko point karta hai
console.log(person2.kaam);
console.log(person2.greet);
console.log(person2.greet());
person2.greet();


