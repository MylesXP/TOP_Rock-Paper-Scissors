
// Declaring score variables to be used in multiple other functions
let compScore = 0;
let playerScore = 0;
let roundCount = 0;
let choiceRock = document.getElementById('rock');
let choicePaper = document.getElementById('paper');
let choiceScissors = document.getElementById('scissors');
let resultBox = document.getElementById('results-container');
let resultBox_Result = document.createElement("h3");
let resultBox_Score = document.createElement("h4");
let resultBoxRound = document.getElementById("result-round");
let scoreContainer = document.getElementById("score-container")
let playerScoreCount = document.getElementById('player-score');
let compScoreCount = document.getElementById('computer-score');
let roundCounter = document.getElementById('round-counter');
let resultTitle = document.getElementById('result-title');
let finalResult = document.createElement('h2');
let roundResult;

finalResult.style.color = 'green';
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
    if (computerSelection === playerSelection) {
       roundResult = 'Draw!';
       roundCount = ++roundCount;
    } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        roundResult = 'Player won; PAPER beats ROCK';
        playerScore = ++playerScore;
        roundCount = ++roundCount;
    } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        roundResult = 'Computer won; PAPER beats ROCK';
        compScore = ++compScore;
        roundCount = ++roundCount;
    } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        roundResult = 'Player won; SCISSORS beats PAPER';
        playerScore = ++playerScore;
        roundCount = ++roundCount;
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        roundResult = 'Computer won; SCISSORS beats PAPER';
        compScore = ++compScore;
        roundCount = ++roundCount;
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        roundResult = 'Player won; ROCK beats SCISSORS';
        playerScore = ++playerScore;
        roundCount = ++roundCount;
    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        roundResult = 'Computer won; ROCK beats SCISSORS';
        compScore = ++compScore;
        roundCount = ++roundCount;
    } else {
        roundResult = 'ERROR';
        roundCount = ++roundCount;
    };

    final();

    resultBox_Result.textContent = roundResult;
    playerScoreCount.textContent = playerScore;
    compScoreCount.textContent = compScore;
    roundCounter.textContent = roundCount;
    return roundResult;
};

function final () {
    // add to singleRound if problem
    if (roundCount == 5) {
        roundCounter.textContent = roundCount;
        playerScoreCount.textContent = playerScore;
        compScoreCount.textContent = compScore;
        resultTitle.textContent = 'Final Result:';
        resultBox.removeChild(resultBox_Result);
        resultBox.removeChild(resultBoxRound);
        scoreContainer.remove();
        if (playerScore === compScore) {
            finalResult.textContent = 'Draw!'
        } else if (compScore > playerScore) {
            finalResult.textContent = 'Computer Wins!'
        } else if (compScore < playerScore) {
            finalResult.textContent = 'Player Wins!'
        } else {
            finalResult.style.color = 'red';
            finalResult.textContent = 'ERROR'
        }
    };

    resultBox.appendChild(finalResult);
}