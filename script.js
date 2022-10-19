let unknownWords = ['Los', 'vendimiadores', 'lo', 'miraban', 'de', 'reojo', 'en', 'un', 'mal', 'disimulado', 'desprecio']
const unknownContainer = document.querySelector('#unknown-container');
const knownContainer = document.querySelector('#known-container');
const knownPara = document.querySelector('#known-para');


// for (let i = 0; i < unknownWords.length; i++) {
//     const clickableWords = document.createElement('button');
// }

unknownWords.forEach((unknown) => {
    const clickableWord = document.createElement('button');
    clickableWord.classList.add(unknown);
    clickableWord.textContent = unknown;
    unknownContainer.appendChild(clickableWord);

    // This event below accesses the button(word) that I click by using e function to track my mouse then uses splice to remove 1 element by inserting the number '1' in the second parameter then inserting e.target in the first parameter to determine where I want that 1 element to be removed.

    clickableWord.addEventListener('click', function(e) {
        knownPara.textContent = e.target.innerText;
        knownContainer.appendChild(knownPara);

        console.log(e.target.innerText)
        console.log(e)
        // console.log(e.target);
        // console.log(e)
        // knownPara.textContent = knownWords;
        // knownContainer.appendChild(knownPara);
    });
});

// clickBtn() {
//     return console.log('hey')
// }

// clickableWord.addEventListener('click', () => {
//     unknownWords.splice(0,1);
// });


// document.addEventListener('contextmenu', function (e) {
//     console.log("You tried to open context menu");
// })
