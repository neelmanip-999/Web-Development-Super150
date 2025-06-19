// fetch ek webapi hai it accepts a string or ye kuch data return karke deta hai
// in reality data was present in the form of small packets
// fetch jab data receive karta hai toh data packets ke form mein aata hai toh pehli packet aane par hi fetch ko laga ki sara data aagaya toh wo aage ka kaam karna suru kar deta hai

// fetch kabhi bhi complete data pehle call mein nahi lata it get the meta data.

// json --> too wait untill you get the entire data
// and other work is to format data in json format --> java script object notation
// json also returns a promise





// json sara data lata hai

// fetch('https://api.tvmaze.com/search/shows?q=girls')
// .then(function(data){
//     console.log(data);
//     return data.json(); //this will returned in next .then
// })
// .then(function(res){
//     console.log(res);
// })


async function callApi(){
    let data = await fetch('https://api.tvmaze.com/search/shows?q=girls');
    let resp = await data.json();
    console.log(resp);
}


