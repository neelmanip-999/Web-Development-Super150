let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
    
console.log(h2.innerText);
console.log(h2.textContent);

// textContent is brainless means ye cass ko nahi padh pata hai
// innercontent tagsko read nahi krata hai
// if we want to read tags then we use textHTML
console.log(h2.innerText);
// h2.textContent = "<h1>mai hu gian</h1>"
h2.innerHTML = "<h1>mai hu gian</h1>"
console.log(h2.textContent);