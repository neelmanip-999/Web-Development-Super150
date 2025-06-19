// 1. Selecting elements by tag name
let allH1 = document.getElementsByTagName('h1');

// Changing the styles of selected elements
allH1[1].style.color = "orange";
allH1[0].style.backgroundColor = "purple";
allH1[1].style.border = "solid black";

// ----------------------------------
// 2. Selecting element by ID
let idd = document.getElementById('vohra');

// Applying styles to the selected ID element
idd.style.border = "5px solid";
idd.style.backgroundColor = "purple";

// Using cssText to apply multiple styles at once
idd.style.cssText = `
    color: orange;
    border: 2px solid pink;
    font-size: 80px;
    background-color: yellow;
`;

// --------------------------------------------
// 3. Selecting elements by class name
let allClass = document.getElementsByClassName('sam');

// Looping through all elements with class 'sam' and applying styles
for(let item of allClass){
    item.style.cssText = `
        color: blue;
        border: 2px solid violet;
        font-size: 80px;
        background-color: purple;
    `;
}

// ---------------------------------------------------------------------------------
// 4. Selecting elements using querySelector
// Selects only the first matching element
let firstH2 = document.querySelector('h2');
let firstVohra = document.querySelector('#vohra');
let firstSam = document.querySelector('.sam');

// 5. Selecting elements using querySelectorAll
// Selects all matching elements
let allH2 = document.querySelectorAll('h2');
let allVohra = document.querySelectorAll('#vohra'); // Unlike getElementById, it selects all occurrences of the ID
let allSam = document.querySelectorAll('.sam');
