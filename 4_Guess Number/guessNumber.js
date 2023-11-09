let randomNumber = parseInt(Math.random()* 100 + 1);
console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess);

    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Invalid Number!");
    }else if(guess<0){
        alert("Invalid Number! Enter Number Grater than 0");
    }else if(guess>100){
        alert("Invalid Number! Enter number Smaller than 100");
    }else
    {
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over! RandomNumber Was ${randomNumber}`);
            endGame();
        }else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations Your Guest is Right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage('Number is TOO LOW');
    }else if(guess > randomNumber){
        displayMessage(`Number is TOO HIGH`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame" style="cursor:pointer">Start new Game</h2>`
    startOver.appendChild(p);
    playGame = false;

    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    console.log(newGameButton);
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()* 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML= '';
        remining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        location.reload();
        
    playGame = true;
});
}

