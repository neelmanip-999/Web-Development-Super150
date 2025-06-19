function calculate(){
    let arr = [];
    function multi5(a){
        console.log(arr);
        if(arr[a] != undefined){
            return arr[a];
        }
        else{
            let res = a*5;
            arr[a] = res;
            console.log(arr);
            return res;
        }
    }
    return multi5;
}

let multi5 = calculate();

console.log(multi5(4)); //20
console.log(multi5(5)); //25
console.log(multi5(4)); //20



// let arr = [];
// function multi5(a){
//     console.log(arr);
//     if(arr[a] != undefined){
//         return arr[a];
//     }
//     else{
//         let res = a*5;
//         arr[a] = res;
//         console.log(arr);
//         return res;
//     }
// }
// console.log(multi5(4)); //20
// console.log(multi5(5)); //25
// console.log(multi5(4)); //20
    