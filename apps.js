// Record and compare player input for desired player output
let getPlayerSelection = prompt('Enter your choice:', "");
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

console.log('Player: ' + playerSelection);

// Create function getComputerChoice, which randomly returns rock, paper or scissors.
 function getComputerChoice() {
     let randomChoice = Math.floor(Math.random() * 3);
     let compSelection;

     if (randomChoice === 0) {
        compSelection = 'ROCK';
        console.log('Computer: ' + compSelection);
        return compSelection;
     } else if (randomChoice === 1) {
        compSelection = 'PAPER';
        console.log('Computer: ' + compSelection);
        return compSelection;
     } else if (randomChoice === 2) {
        compSelection = 'SCISSORS';
        console.log('Computer: ' + compSelection);
        return compSelection;
     } else {
        compSelection = "ERROR HAS OCCURED"
        console.log('Computer: ' + compSelection);
        return compSelection;
     }
};

// Create function singleRound that plays a single round of Rock, paper scissors. Should take ...
// ... two parameters: playerSelection and computerSelection then returns a string declaring winner

function singleRound(playerSelection, computerSelection){
    let roundResult;
    if (computerSelection === playerSelection) {
       roundResult = 'Draw';
    } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        roundResult = 'Player won; PAPER beats ROCK';
    } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        roundResult = 'Computer won; PAPER beats ROCK';
    } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        roundResult = 'Player won; SCISSORS beats PAPER';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        roundResult = 'Computer won; SCISSORS beats PAPER';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        roundResult = 'Player won; ROCK beats SCISSORS';
    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        roundResult = 'Computer won; ROCK beats SCISSORS';
    } else {
        roundResult = 'ERROR';
    }
    console.log('Result: ' + roundResult);
    return roundResult;
};

singleRound(playerSelection, getComputerChoice());

// Write new function called game() that calls the singleRound function inside of it to play
// a 5 round game that keeps score and reports a winner or loser

