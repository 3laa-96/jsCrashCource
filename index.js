// Defined variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computerMove = document.getElementById("computerMove");
const results = document.getElementById("results");
let matchResult = "";
let computerWins = "0";
let playerWins = "0";

rock.addEventListener("click", function () {
  playGame("rock");
});
paper.addEventListener("click", function () {
  playGame("paper");
});
scissors.addEventListener("click", function () {
  playGame("scissors");
});

// Randomizing computer choice
function computerChoice() {
  let cpuMove = "";
  const randomNum = Math.random();
  cpuMove =
    randomNum >= 0 && randomNum < 1 / 3
      ? "rock"
      : randomNum >= 1 / 3 && randomNum < 2 / 3
      ? "paper"
      : "scissors";
  return cpuMove;
}
// main function for playing the game
function playGame(playerMove) {
  computerChoice();
  const cpuMove = computerChoice();
  matchResult =
    playerMove === cpuMove
      ? "tie"
      : playerMove === "rock"
      ? cpuMove === "paper"
        ? (computerWins++, "computer won")
        : (playerWins++, "player won") //computerMove==="scissors"
      : playerMove === "paper"
      ? cpuMove === "scissors"
        ? (computerWins++, "computer won")
        : (playerWins++, "player won") //computerMove==="rock"
      : cpuMove === "rock"
      ? (computerWins++, "computer won") //playerMove==="scissors"
      : (playerWins++, "player won"); //computerMove==="paper"

  computerMove.innerText = `Computer choose : ${cpuMove}`;
  results.innerText = `Results: ${matchResult}, player total wins are [ ${playerWins} ], while computer total wins are [ ${computerWins} ].`;
}

// // 4:30:21
