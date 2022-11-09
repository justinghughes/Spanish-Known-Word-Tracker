const unknownContainer = document.querySelector('#unknown-container');
const knownContainer = document.querySelector('#known-container');
const learnContainer = document.querySelector('#learn-container');
const unknownPara = document.querySelector('#unknown-para');
const learnPara = document.querySelector('#learn-para');
const knownPara = document.querySelector('#known-para');
let str = 'Un hombre de 43 años también está detenido, acusado de ayudar a ocultar el cuerpo de la niña, según el comunicado de la Fiscalía. El ministro de Justicia, Eric Dupond-Moretti, declaró el martes ante la Asamblea Nacional que la mujer detenida recibió una orden de abandonar Francia el 22 de agosto. La sospechosa era desconocida para la policía, añadió, pero ella misma era víctima de la violencia. Este asesino en serie y caníbal es tan pura maldad que retiraron de la venta su disfraz para Halloween. Entró legalmente al país en 2016 tras obtener una visa de estudiante que había expirado desde entonces, dijo Veran. En agosto, cuando aterrizó en el aeropuerto parisino de Orly, las autoridades se percataron de su estatus migratorio y le dieron la orden de abandonar el país, pero la dejaron entrar, explicó el portavoz. Los políticos de extrema derecha han arremetido contra el Gobierno centrista del presidente francés, Emmanuel Macron, y han culpado a sus políticas de inmigración de la muerte de la niña. Una vez más, el sospechoso de esta barbarie no debería haber estado en Francia. A qué esperan para actuar para que se detenga de una vez esta inmigración ilegal fuera de control?, escribió el martes en la red social Twitter Marine Le Pen, que este año se presentó sin éxito a las elecciones presidenciales por tercera vez.'

let unknownWords = str.split(' ');
let clicked = false;
// let countTest = unknownWords.filter(x => x === 'la').length;
// alert(countTest);

// let unknownWords = ['Hola', 'me', 'llamaste', 'anoche'];

let learnWords = [];
let knownWords = [];

unknownWords.forEach((word) => {
    let clickableWord = document.createElement('button');
    clickableWord.textContent = word;
    unknownPara.appendChild(clickableWord)
    unknownContainer.appendChild(unknownPara);
    clickableWord.addEventListener('click', function() {
        if (clickableWord.classList.contains('clicked-learn')) {
            console.log('this be known');
            clickableWord.classList.add('clicked-known');
            let idx = learnWords.indexOf(word);
            learnWords.splice(idx, 1);
            learnPara.textContent = learnWords
            knownWords.push(word);
            knownPara.textContent = knownWords;
            knownContainer.appendChild(knownPara);
        } else {
        clickableWord.classList.add('clicked-learn');
        let children = unknownPara.children;
        for (let i = 0; i < children.length; i++) {
            let tableChild = children[i];
            if (tableChild.textContent === word) {
                tableChild.classList.add('clicked-learn');
            }
        }
        
        console.log('you be learning this still')
        let idx = unknownWords.indexOf(word);
        unknownWords.splice(idx, 1);

        learnWords.push(word);
        learnPara.textContent = learnWords;
        learnContainer.appendChild(learnPara);
        }
        // clickableWord.classList.add('clicked-learn');
        // let idx = unknownWords.indexOf(word);
        // unknownWords.splice(idx, 1);
        // learnWords.push(word);
        // learnPara.textContent = learnWords;
        // learnContainer.appendChild(learnPara);
        // if (!clicked) {
        // } else {
        //     console.log('known fr bitch');
        //     clickableWord.classList.add('clicked-known');
        //     let idx = learnWords.indexOf(word);
        //     learnWords.splice(idx, 1);
        //     knownWords.push(word);
        //     knownPara.textContent = knownWords;
        //     knownContainer.appendChild(knownPara);
        // }
    });
});
    // clickableWord.addEventListener('click', function() {
    //             console.log(i)
    //             clickableWord.classList.add('clicked-btn');
    //             let idx = unknownWords.indexOf(word);
    //             unknownWords.splice(idx, 1);
    //             learnWords.push(word);
    //             console.log("Unknown Words: " + unknownWords);
    //             console.log("Known Words: " + knownWords);
    //             learnPara.textContent = learnWords;
    //             learnContainer.appendChild(learnPara);
    //             clickableWord.addEventListener('click', function() {
    //                 console.log('this word is known');
    //             console.log('new i;' + i);
    //                         clickableWord.classList.add('clicked-btn');
    //                         let idx = learnWords.indexOf(word);
    //                         learnWords.splice(idx, 1);
    //                         knownWords.push(word);
    //                         knownPara.textContent = knownWords;
    //                         knownContainer.appendChild(knownPara);

    //             })})})
 
               













// unknownWords.forEach((unknown) => {
//     const clickableWord = document.createElement('button');
//     clickableWord.classList.add(unknown);
//     clickableWord.textContent = unknown;
//     unknownContainer.appendChild(clickableWord);
//     clickableWord.addEventListener('click', function(e) {
//         console.log(Array.prototype.findIndex())
//     })
// });

