// Defined variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const Move = document.getElementById("Move");
const results = document.getElementById("results");
let matchResult = {
  cpuMove: "",
  playerMove: "",
  cpuWins: "0",
  playerWins: "0",
  ties: "0",
  result: "",
};

rock.addEventListener("click", function () {
  matchResult.playerMove = "Rock";
  playGame(matchResult.playerMove);
});
paper.addEventListener("click", function () {
  matchResult.playerMove = "Paper";
  playGame(matchResult.playerMove);
});
scissors.addEventListener("click", function () {
  matchResult.playerMove = "Scissors";
  playGame(matchResult.playerMove);
});

// Randomizing computer choice
function computerChoice() {
  const randomNum = Math.random();
  matchResult.cpuMove =
    randomNum >= 0 && randomNum < 1 / 3
      ? "Rock"
      : randomNum >= 1 / 3 && randomNum < 2 / 3
      ? "Paper"
      : "Scissors";
  return matchResult.cpuMove;
}
// main function for playing the game
function playGame(playerMove) {
  computerChoice();
  const cpuMove = computerChoice();
  // matchResult =
  matchResult.playerMove === cpuMove
    ? (matchResult.ties++, (matchResult.result = "tie"))
    : matchResult.playerMove === "Rock"
    ? cpuMove === "Paper"
      ? (matchResult.cpuWins++, (matchResult.result = "computer won"))
      : (matchResult.playerWins++, (matchResult.result = "player won"))
    : matchResult.playerMove === "Paper"
    ? cpuMove === "Rock"
      ? (matchResult.playerWins++, (matchResult.result = "player won"))
      : (matchResult.cpuWins++, (matchResult.result = "computer won"))
    : cpuMove === "Paper"
    ? (matchResult.playerWins++, (matchResult.result = "player won"))
    : (matchResult.cpuWins++, (matchResult.result = "computer won"));

  Move.innerText = `Moves : Computer choose ${matchResult.cpuMove} while player choose ${matchResult.playerMove}`;
  results.innerText = `Results : ${matchResult.result} , player total wins are [ ${matchResult.playerWins} ] while computer total wins are [ ${matchResult.cpuWins} ].`;
}
