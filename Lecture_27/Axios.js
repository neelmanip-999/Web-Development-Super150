// fetch browser ka hissa hai
// axios browser ka hissa nahi hai ye third party library hai matlAB client or server ke paas ye nahi hai
// we will be using them with the help of CDN
// CDN --> Content delivery network
// manlo aws cloud mein koi code likha hai toh wnha tak apne code ke connection ke liye ek ladder chahiye jo ki CDN ki sahayta se hota hai

// axios will return a function

//axios also returns us a promise
// sara data ek baar mein mill jata hai
// axios will wait wuntill all data is returned



// axios.get('https://api.tvmaze.com/search/shows?q=girls')
// .then(function(resp){
//     console.log(resp.data);
// })


// axios with async await

async function call(){
    let data = await axios.get('https://api.tvmaze.com/search/shows?q=girls')
    console.log(data.data);
}

 


