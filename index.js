// Defined variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computerMove = document.getElementById("computerMove");

rock.addEventListener("click", function () {
  game("rock");
});
paper.addEventListener("click", function () {
  game("paper");
});
scissors.addEventListener("click", function () {
  game("scissors");
});

let results = document.getElementById("results");
let matchResult = "";
let computerChoice = "";
let computerWins = "0";
let playerWins = "0";

function game(myChoice) {
  let randomNum = Math.random();

  // Randomizing computerChoice
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerChoice = "rock";
    computerMove.innerText = "Computer choose : rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerChoice = "paper";
    computerMove.innerText = "Computer choose : paper";
  } else {
    computerChoice = "scissors";
    computerMove.innerText = "Computer choose : scissors";
  }

  // Comparing computerChoice with myChoice
  if (myChoice === computerChoice) {
    matchResult = "tie";
  } else if (myChoice === "rock" && computerChoice === "scissors") {
    matchResult = "player won";
    playerWins++;
  } else if (myChoice === "rock" && computerChoice === "paper") {
    matchResult = "computer won";
    computerWins++;
  } else if (myChoice === "paper" && computerChoice === "scissors") {
    matchResult = "computer won";
    computerWins++;
  } else if (myChoice === "paper" && computerChoice === "rock") {
    matchResult = "player won";
    matchResult = "computer won";
    playerWins++;
  } else if (myChoice === "scissors" && computerChoice === "paper") {
    matchResult = "player won";
    playerWins++;
  } else {
    matchResult = "computer won";
    computerWins++;
  }
  // announcing results
  results.innerText = `Results: ${matchResult}, player total wins are [ ${playerWins} ], while computer total wins are [ ${computerWins} ].`;
}

// 3:25:46
