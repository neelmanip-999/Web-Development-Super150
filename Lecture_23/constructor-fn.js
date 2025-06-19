// constructor function are normal function but the only difference is how we call it

// constructor function --> function call ke aage new keyword laga dete hn then it will became object. 
// role of constructor function is to return object.


// constructor functions --> whenever you call a function with a new keyword in front of it, then that function is not just a normal funtion it is known as constructor function..
// 2. the role of the constructor function is to create objects
// 3. generally, in order to distinguish between a normal function and a constructor function we start the constructor function with a capital letter(not complasary just convention).


// function sam(){

// }
// console.log(sam()); // undefined


// function sam(){
//     this.username = "Sam";   // = ; 
//     this.mob = 9999;
// }

function sam(naam, num){
    this.username = naam;  // this are the properties 
    this.mob = num;
    // this.greet() = function(){
    //     console.log("Good Morning");
    // }
}
sam.prototype.greet = function(){
    console.log("Good Morning");
}

// greet function baar baar memory le raha hai we want ki ye function baar baar memeory na le ek hi jagah se statically access ho? 

// 

let p1 = new sam("Neelmani", 9999999);
let p2 = new sam("Pandey", 888888);

console.log(p1);
console.log(p1.greet());

// console.log( sam() );
// console.log( new sam() );
