// Record and compare player input for desired player output
let playerSelection = prompt('Enter your pick:', "");

if (!playerSelection) {
    console.log('Enter either rock, paper or scissors')
}  else if (playerSelection.toUpperCase() === 'SCISSORS') {
    console.log('scissors')
} else if (playerSelection.toUpperCase() === 'PAPER') {
    console.log('Paper')
} else if (playerSelection.toUpperCase() === 'ROCK') {
    console.log('Rock')
} 
else {
    console.log('Please enter rock, paper or scissors')
};
// Create function getComputerChoice, which randomly returns rock, paper or scissors.
function getComputerChoice() {
     let randomChoice = Math.floor(Math.random() * 3);
     let compChoice;
     if (randomChoice === 0) {
        compChoice = console.log('COMPUTER CHOSE ROCK')
     } else if (randomChoice === 1) {
        compChoice = console.log('COMPUTER CHOSE PAPER')
     } else if (randomChoice === 2) {
        compChoice = console.log('COMPUTER CHOSE SCISSORS')
     } else {
        compChoice = "ERROR HAS OCCURED"
     }
     return compChoice
}

getComputerChoice()

// Create function singleRound that plays a single round of Rock, paper scissors. Should take ...
// ... two parameters: playerSelection and computerSelection then returns a string declaring winner
