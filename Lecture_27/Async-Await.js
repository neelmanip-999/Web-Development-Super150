// function sam(){

// }
// console.log(sam()); // undefined
// console.log(new sam()); //object will be returned



// if we write async before any function it return a promise
// by default this prosmise return its fullfilled value undefined and if we manually return 100 let say then it return promise with resolved value 100.

// async function sam(){
//     return 100;
// }

// if we manually return a promise then also promise will retured but that time our writted function will be return 
// async function can work alone.

// async function sam(){
//     return new Promise((resolve) => resolve("Neelmani"));
// }
// console.log(sam());

// fetch also return a promise
//----------------------------------------------------------------------------------------

// async function sam(){
//     console.log(10);
//     console.log(20);
//     let data = await fetch('https://api.tvmaze.com/search/shows?q=girls')
//     console.log(data);
//     console.log(30);
// }

// console.log(50);
// sam();
// console.log(60);

// //jnha promise ho raha hai wnha await lag sakta hai await ka kam karne ke liye function ko async hona jaruri hai.


async function sam(){
    console.log(10);
    console.log(20);
    let data = await fetch('https://api.tvmaze.com/search/shows?q=girls')
    console.log(data);
    console.log(30);
}

console.log(50);
sam();
console.log(60);

async function sam2(){
    console.log(10);
    console.log(20);
    let data = await fetch('https://api.tvmaze.com/search/shows?q=girls')
    console.log(data);
    console.log(30);
}

console.log(50);
sam2();
console.log(60);



