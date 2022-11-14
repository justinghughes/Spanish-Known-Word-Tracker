const unknownContainer = document.querySelector('#unknown-container');
const knownContainer = document.querySelector('#known-container');
const learnContainer = document.querySelector('#learn-container');
const unknownPara = document.querySelector('#unknown-para');
const learnPara = document.querySelector('#learn-para');
const knownPara = document.querySelector('#known-para');
let str = 'Un hombre de 43 años también está detenido, acusado de ayudar a ocultar el cuerpo de la niña, según el comunicado de la Fiscalía. El ministro de Justicia, Eric Dupond-Moretti, declaró el martes ante la Asamblea Nacional que la mujer detenida recibió una orden de abandonar Francia el 22 de agosto. La sospechosa era desconocida para la policía, añadió, pero ella misma era víctima de la violencia. Este asesino en serie y caníbal es tan pura maldad que retiraron de la venta su disfraz para Halloween. Entró legalmente al país en 2016 tras obtener una visa de estudiante que había expirado desde entonces, dijo Veran. En agosto, cuando aterrizó en el aeropuerto parisino de Orly, las autoridades se percataron de su estatus migratorio y le dieron la orden de abandonar el país, pero la dejaron entrar, explicó el portavoz. Los políticos de extrema derecha han arremetido contra el Gobierno centrista del presidente francés, Emmanuel Macron, y han culpado a sus políticas de inmigración de la muerte de la niña. Una vez más, el sospechoso de esta barbarie no debería haber estado en Francia. A qué esperan para actuar para que se detenga de una vez esta inmigración ilegal fuera de control?, escribió el martes en la red social Twitter Marine Le Pen, que este año se presentó sin éxito a las elecciones presidenciales por tercera vez.';
const sideBar = document.querySelector('.side-bar');
const vocabSideBar = document.querySelector('.side-bar-vocab');
const vocabBtn = document.querySelector('.vocab-list');
const backBtn = document.querySelector('.back-btn');
const vocabPara = document.querySelector('.vocab-para');
const vocabList = document.querySelector('.vocab-list-ul');
let vocabCheck = false;


vocabBtn.onclick = function () {
    vocabCheck = true;
    console.log('vocabCheck set to true.')
}

vocabBtn.addEventListener('click', () => {
    vocabSideBar.classList.toggle('active');
    console.log('vocab clicked');
    // vocabPara.textContent = knownWords;
    // vocabSideBar.appendChild(vocabPara);
    // knownWords.forEach((item) => {
    //     let li = document.createElement('li');
    //     li.innerText = item;
    //     vocabList.appendChild(li);
    // });
    // vocabPara.appendChild(vocabList);
});

backBtn.addEventListener('click', () => {
    vocabSideBar.classList.toggle('active');
    vocabCheck = false;
    console.log('vocabCheck set to false.')
})


let unknownWords = str.split(' ');
let clicked = false;
// let countTest = unknownWords.filter(x => x === 'la').length;
// alert(countTest);

// let unknownWords = ['Hola', 'me', 'llamaste', 'anoche'];

let learnWords = [];
let knownWords = [];
let children = unknownPara.children;
let clickedBefore = false;
let knownWordBtn = document.createElement('button');


unknownWords.forEach((word) => {
    let clickableWord = document.createElement('button');
    clickableWord.classList.add('btns');
    clickableWord.textContent = word;
    unknownPara.appendChild(clickableWord);
    unknownContainer.appendChild(unknownPara);
    clickableWord.addEventListener('click', function() {
        if (clickableWord.classList.contains('clicked-learn')) {
            if (clickedBefore) {
                console.log('has been clicked ya')
                sideBar.removeChild(knownWordBtn);
                // clickableWord.classList.add('clicked-learn');
                knownWordBtn = document.createElement('button');
                knownWordBtn.textContent = 'I know';
                sideBar.appendChild(knownWordBtn);
            } else {
                clickedBefore = true;
                clickableWord.classList.add('clicked-learn');
                knownWordBtn.textContent = 'I know';
                sideBar.appendChild(knownWordBtn);
            }
        } else {
            console.log('hasnt been clicked!');
            if (clickedBefore) {
                let idx = unknownWords.indexOf(word);
                unknownWords.splice(idx, 1);
                learnWords.push(word);
                learnPara.textContent = learnWords;
                learnContainer.appendChild(learnPara);
                sideBar.removeChild(knownWordBtn);
                knownWordBtn = document.createElement('button');
                knownWordBtn.textContent = 'I know';
                sideBar.appendChild(knownWordBtn);
                let li = document.createElement('li');
                li.innerText = word;
                vocabList.appendChild(li);
                vocabPara.appendChild(vocabList);
            } else {
                console.log('you clicked to learn.')
                let idx = unknownWords.indexOf(word);
                unknownWords.splice(idx, 1);
                learnWords.push(word);
                learnPara.textContent = learnWords;
                learnContainer.appendChild(learnPara);
                clickedBefore = true;
                clickableWord.classList.add('clicked-learn');
                knownWordBtn.textContent = 'I know';
                sideBar.appendChild(knownWordBtn);
                let li = document.createElement('li');
                li.innerText = word;
                vocabList.appendChild(li);
                vocabPara.appendChild(vocabList);
            }
        }
        for (let i = 0; i < children.length; i++) {
            let tableChild = children[i];
            if (tableChild.textContent === word) {
                tableChild.classList.add('clicked-learn');
            }
    }

        knownWordBtn.addEventListener('click', () => {
            if (clickableWord.classList.contains('clicked-known')) {
                console.log('you already learned this word!')
            } else {
                for (let i = 0; i < children.length; i++) {
                    let tableChild = children[i];
                    if (tableChild.textContent === word) {
                        tableChild.classList.add('clicked-known');
                    }
            }
                console.log(clickableWord.textContent)
                let idx = learnWords.indexOf(word);
                learnWords.splice(idx, 1);
                learnPara.textContent = learnWords
                knownWords.push(word);
                knownPara.textContent = knownWords;
                knownContainer.appendChild(knownPara);
            }
            
            // let li = document.createElement('li');
            //         li.innerText = word;
            //         vocabList.appendChild(li);
            //         vocabPara.appendChild(vocabList);
        })
        }
    )})

