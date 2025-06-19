//"this" is a keyword. --> this keyword depend on how it is being called.
// this points to the current object of the class.
// this will point to the window..
// window is the global object. 
// whenever a js code run GEC is created along with it a global object is also created named window ye(window) object is  provided by browser.
// there are five application of this keyword
// types of this :--
// 1. function calling
// 2. method calling
// 3. constructor calling
// 4. indirect calling
// 5. arrow function
 
// function calling :-- in the case of direct function calling this keyword points to the window(global object).

// 


// function sam(){
//     console.log(this);
// }
// sam();


//------------------------------------------------------------------------

// method calling --> in the case of method calling this keyword depends/refers/points on an object inside the method is created.

// let obj = {
//     a:10,
//     fn : function(){
//         console.log(this); // method or object calling
//         // points towards obj
//     }
// }
// obj.fn();

//--------------------------------------------------------------------------------------

// constructor calling -->  

// let obj = {
//     a: 10,
//     fun : function(){
//         console.log(this, "1"); //obj
//         function ans(){
//             console.log(this, "2");//window
//         }
//         ans();// function calling points to window
//     }
// }
// obj.fun(); //method calling points toward obj



//---------------------------------------------------------------------------------------
let obj = {
    a: 10,
    fun : function(){
        console.log(this, "1"); // window
        function answ(){
            console.log(this, "2");
        }
        answ(); // direct calling towards window
    }
}
let ans = obj.fun;
ans(); //window


//------------------------------------------------------------------------------------------

// to nearly created object
function Sam(naam){
    this.naam = naam;
    this.kaam = "vashikaran";
}

let p1 = new Sam("baba");
let p2 = new Sam("bengali");


//--------------------------------------------------------------------------------------

// indirect calling--> 1 . call, 2. apply, 3. bind
// they are used to change the reference of this keyword






