// Record and compare player input for desired player output
let getPlayerSelection = prompt('Enter your choice:', "");
let playerSelection;

if (!getPlayerSelection) {
    playerSelection = 'Player: Please enter rock, paper or scissors'
}  else if (getPlayerSelection.toUpperCase() === 'SCISSORS') {
    playerSelection = 'SCISSORS'
} else if (getPlayerSelection.toUpperCase() === 'PAPER') {
    playerSelection = 'PAPER'
} else if (getPlayerSelection.toUpperCase() === 'ROCK') {
    playerSelection = 'ROCK'
} 
else {
    playerSelection = 'Player: Please enter rock, paper or scissors'
};

console.log(playerSelection);

// Create function getComputerChoice, which randomly returns rock, paper or scissors.
 function getComputerChoice() {
     let randomChoice = Math.floor(Math.random() * 3);
     let compSelection;

     if (randomChoice === 0) {
        compSelection = 'ROCK';
        console.log(compSelection);
        return compSelection;
     } else if (randomChoice === 1) {
        compSelection = 'PAPER';
        console.log(compSelection);
        return compSelection;
     } else if (randomChoice === 2) {
        compSelection = 'SCISSORS';
        console.log(compSelection);
        return compSelection;
     } else {
        compSelection = "ERROR HAS OCCURED"
        console.log(compSelection);
        return compSelection;
     }
};

// Create function singleRound that plays a single round of Rock, paper scissors. Should take ...
// ... two parameters: playerSelection and computerSelection then returns a string declaring winner

function singleRound(playerSelection, computerSelection){
    let roundResult;
    if (computerSelection === playerSelection) {
       roundResult = 'Result: Draw';
    } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        roundResult = 'Result: Player won; PAPER beats ROCK';
    } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        roundResult = 'Result: Computer won; PAPER beats ROCK';
    } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        roundResult = 'Result: Player won; SCISSORS beats PAPER';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        roundResult = 'Result: Computer won; SCISSORS beats PAPER';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        roundResult = 'Result: Player won; ROCK beats SCISSORS';
    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        roundResult = 'Result: Computer won; ROCK beats SCISSORS';
    } else {
        roundResult = 'Result: ERROR';
    }
    console.log(roundResult);
    return roundResult;
};

singleRound(playerSelection, getComputerChoice());

// Write new function called game() that calls the singleRound function inside of it to play
// a 5 round game that keeps score and reports a winner or loser

