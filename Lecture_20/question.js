let arr = [1, 2, 3, 4, 5, 6];

let ret = arr.map(function(item, index){
    return item*2;
})
let ans = ret.filter(function(item, index){
    if(item >= 10){
        return item;
    }
})
console.log(ans);


let ans2 = arr.map(function(item, index){
    return item*2;
}).filter(function(item, index){
    if(item >= 10){
        return item;
    }
});
console.log(ans2);

