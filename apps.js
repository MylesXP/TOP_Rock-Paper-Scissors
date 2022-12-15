
// Declaring score variables to be used in multiple other functions
let compScore = 0;
let playerScore = 0;
let choiceRock = document.getElementById('rock');
let choicePaper = document.getElementById('paper');
let choiceScissors = document.getElementById('scissors');
let resultBox = document.getElementById('results-container');
let resultBox_Result = document.createElement("h3");
let resultBox_Score = document.createElement("h4");
let playerScoreCount = document.getElementById('player-score');
let compScoreCount = document.getElementById('computer-score');


playerScoreCount.textContent = 0;
compScoreCount.textContent = 0;
resultBox.appendChild(resultBox_Result);
resultBox.appendChild(resultBox_Score);

// Button choice logic
choiceRock.addEventListener('click', () => {
    singleRound('ROCK', getComputerChoice())
});

choicePaper.addEventListener('click', () => {
    singleRound('PAPER', getComputerChoice())
})

choiceScissors.addEventListener('click', () => {
    singleRound('SCISSORS', getComputerChoice())
})

// Create function getComputerChoice, which randomly returns rock, paper or scissors.
 function getComputerChoice() {
     let randomChoice = Math.floor(Math.random() * 3);
     let compSelection;

     if (randomChoice === 0) {
        compSelection = 'ROCK';
        return compSelection;
     } else if (randomChoice === 1) {
        compSelection = 'PAPER';
        return compSelection;
     } else if (randomChoice === 2) {
        compSelection = 'SCISSORS';
        return compSelection;
     } else {
        compSelection = "ERROR HAS OCCURED"
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
        playerScore = ++playerScore;
    } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        roundResult = 'Computer won; PAPER beats ROCK';
        compScore = ++compScore;
    } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        roundResult = 'Player won; SCISSORS beats PAPER';
        playerScore = ++playerScore;
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        roundResult = 'Computer won; SCISSORS beats PAPER';
        compScore = ++compScore;
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        roundResult = 'Player won; ROCK beats SCISSORS';
        playerScore = ++playerScore;
    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        roundResult = 'Computer won; ROCK beats SCISSORS';
        compScore = ++compScore;
    } else {
        roundResult = 'ERROR';
    };
    resultBox_Result.textContent = roundResult;
    playerScoreCount.textContent = playerScore;
    compScoreCount.textContent = compScore;
    return roundResult;
};

// Write new function called game() that calls the singleRound function inside of it to play
// a 5 round game that keeps score and reports a winner or loser
// function game() {
//     for (let i = 0; i < 5; i++) {
//         singleRound(getPlayerInput(), getComputerChoice());
//      };

//      if (compScore > playerScore) {
//         console.log('Final Result: Computer Wins!');
//     } else if (compScore < playerScore) {
//         console.log('Final Result: Player Wins!');
//     } else if (compScore === playerScore) {
//         console.log('Final Result: A Draw!');
//     } else {
//         console.log('Final Result: ERROR');
//     };
// };

// console.log(game());


