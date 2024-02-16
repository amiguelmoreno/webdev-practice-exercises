const gameTable = document.getElementById("game-container");
const cells = gameTable.querySelectorAll(".cell");
const resetBtn = document.querySelector(".reset");

gameTable.addEventListener("click", handleClick);
resetBtn.addEventListener("click", resetGame);

const PLAYERS = {
  p1: "x",
  p2: "o",
};

let playerTurn = PLAYERS.p1;
let winner = "";

function handleClick(e) {
  if (!e.target.classList.contains("cell")) return;
  if (e.target.textContent) return;
  if (winner) return;

  e.target.textContent = playerTurn;

  checkWinner();
  playerTurn = playerTurn === PLAYERS.p1 ? PLAYERS.p2 : PLAYERS.p1;
}

function resetGame() {
  cells.forEach((cell) => (cell.textContent = ""));
  winner = "";
  playerTurn = PLAYERS.p1;
  resetBtn.classList.remove("active");
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      console.log(`¡Jugador ${playerTurn} ha ganado!`);
      winner = playerTurn;
      resetBtn.classList.add("active");
    }
  }

  if (Array.from(cells).every((cell) => cell.textContent)) {
    //here Array.from is done because cells is NodeList
    console.log("¡Es un empate!");
    resetBtn.classList.add("active");
  }
}
