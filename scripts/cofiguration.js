//fuctions
function openPlayerConfig(event) {
  overlayElement.style.display = "block";
  backdropElement.style.display = "block";
  editedPlayer = +event.target.dataset.editplayer;
}

function closePlayerConfig() {
  overlayElement.style.display = "none";
  backdropElement.style.display = "none";
  const errorElement = document.getElementById("error");
  errorElement.textContent = "";
  const formInput = document.querySelector(".form-control");
  formInput.classList.remove("error");
  const inputElement = document.getElementById("playername");
  inputElement.value = "";
}
function addPlayerNames(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayer = formData.get("playername").trim();

  if (!enteredPlayer) {
    const errorElement = document.getElementById("error");
    errorElement.textContent = "Invalid credentials, please enter a name ";
    const formInput = document.querySelector(".form-control");
    formInput.classList.add("error");
    return;
  }
  players[editedPlayer - 1].name = enteredPlayer;

  const playerCards = document.getElementById(
    "player-" + editedPlayer + "-card"
  );
  playerCards.firstElementChild.nextElementSibling.textContent =
    players[editedPlayer - 1].name;
  closePlayerConfig();
}
