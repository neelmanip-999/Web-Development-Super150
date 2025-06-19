// this keyword depends on how it is being called
// types of this :-
// function calling
// method calling
// constructer calling
// indirect calling
// arrow function


// function

function sam(){
    console.log(this);
}

sam();
// console.log(typeof(window));
// whenever a js codes runnes a GEC created along with it a global object is created or ye hame browser provid karata hai
// function calling --> in the case of direct function calling this keyword pount to the window (global object)



// =================================================================================
// method calling

let obj = {
    a : 10,
    fn : function(){
        console.log(this);
        
    }
}

obj.fn()

// in the case of object calling this keyword depends on the object inside which that method is created
// point the object of that method



let obj1  = {
    a : 10,
    fun : function(){
        console.log(this , "1"); // point the obj1 due to method callint
        function ans(){
            console.log(this , "2"); // point the window due to direct calling
            
        }
        ans()
    }
}

obj1.fun();





let obj2 = {
    a : 10,

    fun : function(){
        console.log(this , "1"); //window
        function answ(){
            console.log(this , "2"); //window
            
        }
        answ();
        
    }
}

let ans = obj2.fun;
ans();


// ==============================================================
// constructor function

function Sam(){
    this.naam = "baba bengali"; //p1 , p2
    this.kaam = "varishikaran"; // p1, p2
}

let p1 = new Sam();
let p2 = new Sam();

// in the case of constructor function is point the newly created object




// ===========================================================================
// indirect calling
// call() , apply() and bind() ,  they are use to change the reference of this keyword


let obj3 = {
    a : 10,
    fn : function(){
        console.log(this.a);
        
    }
}

let obj4 = {
    a  : 50,
}


obj3.fn()
// obj4.fn() // this gave error


let obj3o = {
    a : 10,
    fn : function(x,y,z){
        console.log(this.a,x,y,z);
        
    }
}

let obj4o = {
    a  : 50,
}


obj3o.fn()
// call
obj3o.fn.call(obj4o,10,20,30)

// apply
// obj3o.fn.apply(obj4o,10,20,30)
obj3o.fn.apply(obj4o,[10,20,30])
// call jo argument accept comma sepreterd karta hai but apply as a array accept karta hai

// bind :- it creates a copy that function
let fncopy = obj3o.fn.bind(obj4o,10,20,30)
fncopy()
// inheritance and polymorphisam
// js use oop's indirectly but it is nota oop's language


// ================================================================
// arrow functoin

function sqr(x){
    return x*x;
}

console.log( sqr(7));

// type .1 arrow function

let sqr1 = (x)=>{
    return x*x
}

console.log( sqr1(7));

// ------------------------------
// type.2
let sqr2 = (x)=> x*x
console.log( sqr2(7));

// ------------------------------
// type.3

let sqr3 = x => x*x
console.log(sqr3(7));

// **********************************************

let obja = {
    a : 10,
    fun : function(){
        console.log(this); //obj
        let ans = () => {
            console.log(this); //arrow function this keyword depend on parent's this keyword = obj
            
        }
        ans()
    }
}

obja.fun()


// .........................
let objb = {
    a : 10,
    fun : function(){
        console.log(this); //window
        let ans = () => {
            console.log(this); //window
            
        }
        ans()
        
    }
}

let out = objb.fun
out()


let objc = {
    a : 10,
    fun : ()=>{
        console.log(this); //obj
        let ans = () => {
            console.log(this); //arrow function this keyword depend on parent's this keyword = obj
            
        }
        ans()
        
    }
}

objc.fun()

// object ka this keyword window hota hai