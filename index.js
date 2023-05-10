// Defined variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computerMove = document.getElementById("computerMove");
const results = document.getElementById("results");
let matchResult = "";
let choice = "";
let computerWins = "0";
let playerWins = "0";

// Randomizing computer choice
function computerChoice() {
  const randomNum = Math.random();
  choice =
    randomNum >= 0 && randomNum < 1 / 3
      ? "rock"
      : randomNum >= 1 / 3 && randomNum < 2 / 3
      ? "paper"
      : "scissors";
}

// Calling functions by buttons
rock.addEventListener("click", function () {
  computerChoice();
  choice === "paper"
    ? ((matchResult = "computer won"), computerWins++)
    : choice === "scissors"
    ? ((matchResult = "player won"), playerWins++)
    : (matchResult = "tie");
  displayResults();
});

paper.addEventListener("click", function () {
  computerChoice();
  choice === "scissors"
    ? ((matchResult = "computer won"), computerWins++)
    : choice === "rock"
    ? ((matchResult = "player won"), playerWins++)
    : (matchResult = "tie");
  displayResults();
});

scissors.addEventListener("click", function () {
  computerChoice();
  choice === "rock"
    ? ((matchResult = "computer won"), computerWins++)
    : choice === "paper"
    ? ((matchResult = "player won"), playerWins++)
    : (matchResult = "tie");
  displayResults();
});

// DIsplaying the result
function displayResults() {
  computerMove.innerText = `Computer choose : ${choice}`;
  results.innerText = `Results: ${matchResult}, player total wins are [ ${playerWins} ], while computer total wins are [ ${computerWins} ].`;
}

// 3:58:41
