function startNewGame() {
  const gameBoardOrderedList = document.getElementById("active-game");
  resetGameStatus();
  if (players[0].name == "" || players[1].name == "") {
    alert("Please enter player names for both fields");
    return;
  }

  if (activePlayer.textContent !== players[activePlayer].name) {
    activePlayer.textContent = players[activePlayer].name;
  }
  gameBoardOrderedList.style.display = "block";

  activePlayerName.textContent = players[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function startGame(event) {
  const listElement = event.target;
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }

  const selectedRow = listElement.dataset.row - 1;
  const selectedCol = listElement.dataset.col - 1;
  if (gameData[selectedRow][selectedCol] > 0) {
    alert("Can't select a selected field");
    return;
  }
  listElement.textContent = players[activePlayer].symbol;
  listElement.classList.add("disabled");

  gameData[selectedRow][selectedCol] = activePlayer + 1;

  const winnerId = checkForWinner();

  currentRound++;
  if (winnerId !== 0) {
    gameIsOver = true;
    gameOver(winnerId);
  }

  switchPlayer();
}

function checkForWinner() {
  for (let i = 0; i < 3; i++) {
    //Checking for winner in rows
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] == gameData[i][1] &&
      gameData[i][1] == gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  //Checking for winner in columns
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] == gameData[1][i] &&
      gameData[0][i] == gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  //Checking for winner from top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] == gameData[1][1] &&
    gameData[1][1] == gameData[2][2]
  ) {
    return gameData[2][2];
  }
  //Checking for winner from top right to bottom left
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] == gameData[1][1] &&
    gameData[1][1] == gameData[2][0]
  ) {
    return gameData[2][0];
  }

  if (currentRound == 9) {
    return -1;
  }
  return 0;
}

function gameOver(winnerId) {
  gameOverBoardElement.style.display = "block";
  gameOverBoardElement.nextElementSibling.textContent = "";

  if (winnerId > 0) {
    gameOverBoardElement.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else if (winnerId === -1) {
    gameOverBoardElement.firstElementChild.textContent = "It's a draw";
  }
}

function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;

  gameOverBoardElement.firstElementChild.innerHTML =
    'You won <span id="winner-name">Player Name</span>!';
  gameOverBoardElement.style.display = "none";

  let resetLists = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      orderedListElement.children[resetLists].textContent = "";
      orderedListElement.children[resetLists].classList.remove("disabled");
      resetLists++;
      gameIsOver = false;
    }
  }
}
