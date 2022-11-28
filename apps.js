// Record and compare player input for desired player output
let getPlayerSelection = prompt('Enter your pick:', "");
let playerSelection;

if (!getPlayerSelection) {
    playerSelection = 'Please enter rock, paper or scissors'
}  else if (getPlayerSelection.toUpperCase() === 'SCISSORS') {
    playerSelection = 'SCISSORS'
} else if (getPlayerSelection.toUpperCase() === 'PAPER') {
    playerSelection = 'PAPER'
} else if (getPlayerSelection.toUpperCase() === 'ROCK') {
    playerSelection = 'ROCK'
} 
else {
    playerSelection = 'Please enter rock, paper or scissors'
};

console.log(playerSelection)

// Create function getComputerChoice, which randomly returns rock, paper or scissors.
let cChoice = function getComputerChoice() {
     let randomChoice = Math.floor(Math.random() * 3);
     let compChoice;
     if (randomChoice === 0) {
        compChoice = 'ROCK'
        console.log(compChoice)
        return compChoice
     } else if (randomChoice === 1) {
        compChoice = 'PAPER'
        console.log(compChoice)
        return compChoice
     } else if (randomChoice === 2) {
        compChoice = 'SCISSORS'
        console.log(compChoice)
        return compChoice
        
     } else {
        compChoice = "ERROR HAS OCCURED"
        console.log(compChoice)
        return compChoice
     }
}

// Create function singleRound that plays a single round of Rock, paper scissors. Should take ...
// ... two parameters: playerSelection and computerSelection then returns a string declaring winner

function singleRound(cChoice, playerSelection){
    if (cChoice === playerSelection) {
        console.log('Draw');
    } else {
        console.log('not draw')
    }
}

singleRound(cChoice(), playerSelection)
