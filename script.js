const unknownContainer = document.querySelector('#unknown-container');
const knownContainer = document.querySelector('#known-container');
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
        console.log(unknownWords);
        // if (idx )
        // console.log(idx)
    })});
    //     if (idx )
    //     // unknownWords.filter(word);
    //     // knownWords.push(word);
    //     // console.log(unknownWords);
    //     // console.log(knownWords);
    // })});















// unknownWords.forEach((unknown) => {
//     const clickableWord = document.createElement('button');
//     clickableWord.classList.add(unknown);
//     clickableWord.textContent = unknown;
//     unknownContainer.appendChild(clickableWord);
//     clickableWord.addEventListener('click', function(e) {
//         console.log(Array.prototype.findIndex())
//     })
// });





