let h1 = document.querySelector('h1');
h1.classList.add('sam', 'mav', 'vohra');
// hum ek baar mein kitni bhi class ko add kar sakte hain.

h1.classList.remove('sam', 'vohra');
// we can also remove as many class as needed in a single go.



// We can go anywhere in the DOM tree by just selecting a single element of tree,
let para = document.querySelector('p');
para.parentElement.parentElement

para.parentElement.parentElement.nextElementSibling.children[1].children[1].computedStyleMap.color = 'red' ;

