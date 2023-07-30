let computerChoiceDisplay = document.getElementById('computer-choice')
let userChoiceDisplay = document.getElementById('user-choice')
let resultDisplay = document.getElementById('result')
let possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generatecomputerChoice()
    getResult()
}))

function generatecomputerChoice(){
    const randomChoice = Math.floor(Math.random() * possibleChoices.length) 

    if (randomChoice === 1){
        computerChoice = 'rock'
    }
    if (randomChoice === 2){
        computerChoice = 'scissors'
    }
    if (randomChoice === 1){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice 
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'its a draw!'
    }
    if(computerChoice === 'rock' && userChoice ==='paper'){
        result = 'you win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lose!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lose!'
    }
    if(computerChoice === 'scissors'&& userChoice === 'rock'){
        result = 'you win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win!'
    }
    resultDisplay.innerHTML = result
} 
