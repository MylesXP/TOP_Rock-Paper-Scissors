
// Declaring score variables to be used in multiple other functions
let compScore = 0;
let playerScore = 0;


// Create function to get player input
function getPlayerInput () {
    let playerChoice = prompt('Enter your choice:', "");
    let playerInput;

    if (!playerChoice) {
        playerInput = 'Please enter rock, paper or scissors'
    }  else if (playerChoice.toUpperCase() === 'SCISSORS') {
        playerInput = 'SCISSORS'
    } else if (playerChoice.toUpperCase() === 'PAPER') {
        playerInput = 'PAPER'
    } else if (playerChoice.toUpperCase() === 'ROCK') {
        playerInput = 'ROCK'
    }
    else {
        playerInput = 'Please enter rock, paper or scissors'
    };
    console.log('Player: ' + playerInput);
    return playerInput
}
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
     };
};

// Create function singleRound that plays a single round of Rock, paper scissors. Should take ...
// ... two parameters: playerSelection and computerSelection then returns a string declaring winner

function singleRound(playerSelection, computerSelection){
    let roundResult;
    
    if (computerSelection === playerSelection) {
       roundResult = 'Draw';
    } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        roundResult = 'Player won; PAPER beats ROCK';
        playerScore = ++playerScore
        console.log('Player Score: ' + playerScore)
    } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        roundResult = 'Computer won; PAPER beats ROCK';
        compScore = ++compScore
        console.log('Computer Score: ' + compScore)
    } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        roundResult = 'Player won; SCISSORS beats PAPER';
        playerScore = ++playerScore
        console.log('Player Score: ' + playerScore)
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        roundResult = 'Computer won; SCISSORS beats PAPER';
        compScore = ++compScore
        console.log('Computer Score: ' + compScore)
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        roundResult = 'Player won; ROCK beats SCISSORS';
        playerScore = ++playerScore
        console.log('Player Score: ' + playerScore)
    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        roundResult = 'Computer won; ROCK beats SCISSORS';
        compScore = ++compScore
        console.log('Computer Score: ' + compScore)
    } else {
        roundResult = 'ERROR';
    };
    console.log('Round Result: ' + roundResult);
    console.log('');
    return roundResult;
};

// Write new function called game() that calls the singleRound function inside of it to play
// a 5 round game that keeps score and reports a winner or loser
function game() {
    for (let i = 0; i < 5; i++) {
        singleRound(getPlayerInput(), getComputerChoice());
     };

     if (compScore > playerScore) {
        console.log('Final Result: Computer Wins!');
    } else if (compScore < playerScore) {
        console.log('Final Result: Player Wins!');
    } else if (compScore === playerScore) {
        console.log('Final Result: A Draw!');
    } else {
        console.log('Final Result: ERROR');
    };
};

console.log(game());


