const unknownContainer = document.querySelector('#unknown-container');
const knownContainer = document.querySelector('#known-container');
const knownPara = document.querySelector('#known-para');
let unknownWords = ['Hola', 'me', 'llamaste', 'anoche'];
let knownWords = [];

unknownWords.forEach((word) => {
    let clickableWord = document.createElement('button');
    clickableWord.textContent = word;
    unknownContainer.appendChild(clickableWord);
    clickableWord.addEventListener('click', function() {
        // console.log(unknownWords.indexOf(word));
        // let unknownIndex = unknownWords.indexOf(word);
        // console.log(unknownIndex)
        let idx = unknownWords.indexOf(word);
        unknownWords.splice(idx, 1);
        knownWords.push(word);
        console.log(unknownWords);
        knownPara.textContent = knownWords;
        knownContainer.appendChild(knownPara);
        console.log(knownWords);
    })});
















// unknownWords.forEach((unknown) => {
//     const clickableWord = document.createElement('button');
//     clickableWord.classList.add(unknown);
//     clickableWord.textContent = unknown;
//     unknownContainer.appendChild(clickableWord);
//     clickableWord.addEventListener('click', function(e) {
//         console.log(Array.prototype.findIndex())
//     })
// });





