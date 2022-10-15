//getting elements
//adding events
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;


let gameIsOver = false;
const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

const editPlayerBtnElement1 = document.getElementById("edit-player-1-button");
const editPlayerBtnElement2 = document.getElementById("edit-player-2-button");
const overlayElement = document.querySelector(".modal");
const backdropElement = document.getElementById("backdrop");
const addPlayerFormElement = document.querySelector(".modal form");
const closeFormBtnElement = document.getElementById("cancel");
const gameConfigBtnElement = document.getElementById("game-configuration");
const orderedListElement = document.getElementById("game-board");
const orderedListItems = document.querySelectorAll("#game-board li");
const activePlayerName = document.getElementById("active-player-name");
const gameOverBoardElement = document.getElementById("game-over");

editPlayerBtnElement1.addEventListener("click", openPlayerConfig);
editPlayerBtnElement2.addEventListener("click", openPlayerConfig);
closeFormBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
addPlayerFormElement.addEventListener("submit", addPlayerNames);
gameConfigBtnElement.lastElementChild.addEventListener("click", startNewGame);
orderedListItems.forEach((x) => x.addEventListener("click", startGame));
