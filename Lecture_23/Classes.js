// classes are syntactical sugar of constructor function
// jo kaam aapka constructor function kar raha hai same kaam claases kar raha hai bss likhne ka tarika accha hai.

//role of classes is to also create object.
// classes comes after ES6. 
// classes are used for privatization our variable and function.
// before ES6 we use closure for privatization.
// we create constructor function in class.
// by convention constructor function name start with capital same for classes also so that we can difference b/w the general function and constructor fn or classes.


//Constructor
function Person(naam, umar, rang){
    this.naam = naam;
    this.age = umar;
    this.favColour = rang; 
}

let p1 = new Person("mav", 2.5, "brown");
let p2 = new Person("namit", 19, "pink");
console.log(p1);
console.log(p2);

//------------------------------------------------------------------------------------
// Class 
class Person1{
    constructor(naam, umar, rang){
        this.naam = naam;
        this.age = umar;
        this.favColour = rang; 
    }
    greet(){
        console.log("Good Morning");
    }
}
// yanhan greet show nahin hoga lekin work karega matlab it can overcome the limitation of constructor function. 


let p3 = new Person("mav", 2.5, "brown");
let p4 = new Person("namit", 19, "pink");
console.log(p3);
console.log(p4);


// DRY vs WET 
// dont repeat yourself , write everything twice


class Student extends Person1{
    constructor(naam, umar, rang, roll){
        super(naam, umar, rang);
        this.rollno = roll;
    }
    greet(){
        console.log("Good Night");
    }
    bye(){
        console.log("Nikhil CR");
    }
}
// student class is a child class of person1
let p5 = new Student("mav", 2.5, "brown", 420);
let p6 = new Student("namit", 19, "pink", 421);

// p5 ka dender proto student, student ka dender proto person1, person1 ka dender proto object.prototype or uska dender proto null.


// super keyword ka kaam hota hai parent ke constructor ko execute karna.
