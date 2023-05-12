// Defined variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computerMove = document.getElementById("computerMove");
const results = document.getElementById("results");
let matchResult = "";
let cpuMove = "";
let cpuWins = 0;
let playerWins = 0;

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
        ? (cpuWins++, "computer won")
        : (playerWins++, "player won")
      : playerMove === "paper"
      ? cpuMove === "rock"
        ? (playerWins++, "player won")
        : (cpuWins++, "computer won")
      : cpuMove === "paper"
      ? (playerWins++, "player won")
      : (cpuWins++, "computer won");

  computerMove.innerText = `Computer choose : ${cpuMove}`;
  results.innerText = `Results: ${matchResult}, player total wins are [ ${playerWins} ], while computer total wins are [ ${cpuWins} ].`;
}
