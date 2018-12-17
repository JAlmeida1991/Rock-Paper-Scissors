// 'Global' variables:
const choices = document.querySelectorAll(".choice");
const outcome = document.querySelector(".outcome");
const playerWinScore = document.querySelector("#p-win");
const computerWinScore = document.querySelector("#c-win");
const playerLoseScore = document.querySelector("#p-lose");
const computerLoseScore = document.querySelector("#c-lose");
const playerTieScore = document.querySelector("#p-tie");
const computerTieScore = document.querySelector("#c-tie");

// This will prevent user from spamming choices
const state = { userTurn: true };

export {
  choices,
  outcome,
  playerWinScore,
  computerWinScore,
  playerLoseScore,
  computerLoseScore,
  playerTieScore,
  computerTieScore,
  state
};
