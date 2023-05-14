// Defined variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const MovesDisplayed = document.getElementById("MovesDisplayed");
const resultsDisplayed = document.getElementById("resultsDisplayed");
const reset = document.getElementById("reset");
// let matchResult = {};

display();

rock.addEventListener("click", function () {
  matchResult.playerMove = "Rock";
  playGame("rock");
});
paper.addEventListener("click", function () {
  matchResult.playerMove = "Paper";
  playGame("paper");
});
scissors.addEventListener("click", function () {
  matchResult.playerMove = "Scissors";
  playGame("scissors");
});
reset.addEventListener("click", function () {
  localStorage.removeItem("results");
  display();
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
  const cpuMove = computerChoice();
  playerMove === cpuMove
    ? (matchResult.ties++, (matchResult.result = "tie"))
    : playerMove === "Rock"
    ? cpuMove === "Paper"
      ? (matchResult.cpuWins++, (matchResult.result = "computer won"))
      : (matchResult.playerWins++, (matchResult.result = "player won"))
    : playerMove === "Paper"
    ? cpuMove === "Rock"
      ? (matchResult.playerWins++, (matchResult.result = "player won"))
      : (matchResult.cpuWins++, (matchResult.result = "computer won"))
    : cpuMove === "Paper"
    ? (matchResult.playerWins++, (matchResult.result = "player won"))
    : (matchResult.cpuWins++, (matchResult.result = "computer won"));

  //Storing in local storage
  localStorage.setItem("results", JSON.stringify(matchResult));

  display();
}
// Display function
function display() {
  matchResult = JSON.parse(localStorage.getItem("results")) || {
    cpuMove: "",
    playerMove: "",
    cpuWins: 0,
    playerWins: 0,
    ties: 0,
    result: "",
  };
  MovesDisplayed.innerText = `Moves : Computer choose [ ${matchResult.cpuMove} ] while player choose [ ${matchResult.playerMove} ]`;
  resultsDisplayed.innerText = `Results : [ ${matchResult.result} ] , player total wins are [ ${matchResult.playerWins} ] while computer total wins are [ ${matchResult.cpuWins} ].`;
}
