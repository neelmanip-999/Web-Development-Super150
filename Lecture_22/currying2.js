const allGlobalParcels =[
    {
        created:234567894000,
        location:"India",
        properties:{
            name:"Samsung"
        }
    },
    {
        created:234566694000,
        location:"Us",
        properties:{
            name:"Samsung"
        }
    },
    {
        created:234537894000,
        location:"India",
        properties:{
            name:"Samsung"
        }
    }
]

// function sortParcelBycountry(data,country,order){
//     const countryParcel= data.filter(d=>d.location==country);
//     const sortedResult =countryParcel.sort((a,b)=>{
//         if(order=="asc"){
//             return a.created-b.created;
//         }
//         return b.created-a.created
//     })
//     return sortedResult;
    
// }
// console.log(sortParcelBycountry(allGlobalParcels,"India","asc"));
// console.log(sortParcelBycountry(allGlobalParcels,"India","dsc"));


// let arr =["1","123","2","234","1111"];
// console.log(arr.sort(function(a,b){ return a-b}));



// function sortParcelBycountry(data){
//     return function sortParcelBycountry1(country){
//         const countryParcel= data.filter(d=>d.location==country);
//         return function sortParcelBycountry2(order){
//             const sortedResult =countryParcel.sort((a,b)=>{
//                 if(order=="asc"){
//                     return a.created-b.created;
//                 }
//                 return b.created-a.created
//             })
//             return sortedResult;
//         }
//     }
    
    
// }

// let some = sortParcelBycountry(allGlobalParcels)("India");

// console.log(some("asc"));
// console.log(some("dsc"));




function sortParcelBycountry(data){
    return function sortParcelBycountry1(country){
        const countryParcel= data.filter(d=>d.location==country);
        return function sortParcelBycountry2(order){
            const sortedResult =[...countryParcel].sort((a,b)=>{  //copy an array
                if(order=="asc"){
                    return a.created-b.created;
                }
                return b.created-a.created
            })
            return sortedResult;
        }
    }
    
    
}

let some = sortParcelBycountry(allGlobalParcels)("India");

console.log(some("asc"));
console.log(some("dsc"));




