const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function game(myChoice) {
  let randomNum = Math.random();
  let computerChoice = "";
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerChoice = "rock";
    console.log("computer choice was rock");
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerChoice = "Paper";
    console.log("computer choice was paper");
  } else {
    computerChoice = "scissors";
    console.log("computer choice was scissors");
  }

  if (myChoice === computerChoice) {
    console.log("tie");
  } else if (myChoice === "rock" && computerChoice === "scissors") {
    console.log("player won");
  } else if (myChoice === "rock" && computerChoice === "paper") {
    console.log("computer won");
  } else if (myChoice === "paper" && computerChoice === "scissors") {
    console.log("computer won1");
  } else if (myChoice === "paper" && computerChoice === "rock") {
    console.log("player won2");
  } else if (myChoice === "scissors" && computerChoice === "paper") {
    console.log("player won3");
  } else {
    console.log("computer won4");
  }
  computerChoice = "";
}

// 3:25:46
