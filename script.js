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
    clickableWord.addEventListener('click', function(e) {
        const knownWords = unknownWords.splice(e.target, 1);
        console.log(knownWords)
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
