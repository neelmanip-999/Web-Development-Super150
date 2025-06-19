let arr = [
    'https://images.unsplash.com/photo-1737365506116-ef7eba797492?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1742205309355-70e063aa1865?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1742741180037-368ad56c4f70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1743065272129-5e261bad0c46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D'
]

let image = document.querySelector('img')
let n = 0;
let idd = setInterval(function(){
    image.setAttribute('src',arr[n]);
    n= (n+1)%arr.length;
},1000)


setTimeout(() => {
    clearInterval(idd)
}, 10000);



// while(true){
//     setTimeout(function(){
//         image.setAttribute('src',arr[n]);
//         n= (n+1)%arr.length;
//     },1000)
// }