const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
const start = document.querySelector("#start");
const timer = document.querySelector("#timer");
const timeDuration = document.querySelector("#time-duration");
const timeForm = document.querySelector("#form");

let duration;
let intervalId;
let paused = false;

reset.addEventListener("click", resetTimer);
start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);

timeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!timeDuration.value) return;

  duration = 4; //+timeDuration.value * 60;
  timeDuration.value = null;
  setTimer(duration);
});

function formatNumber(value) {
  // Agregar un "0" a la izquierda si el valor es menor que 10
  return value < 10 ? "0" + value : value;
}

function setTimer(duration) {
  if (duration === 0) {
    resetTimer();
  }
  let hours = Math.floor(duration / 3600);
  let min = Math.floor((duration % 3600) / 60);
  let sec = Math.floor(duration % 60);

  updateView(hours, min, sec);
  console.log(hours, min, sec);
}

function startTimer() {
  if (!duration) return;
  if (!intervalId && !pause) return;
  paused = false;
  intervalId = setInterval(() => setTimer(--duration), 1000);
  start.classList.add("hidden");
}

function pauseTimer() {
  if (!intervalId || paused) return;
  start.classList.remove("hidden");
  paused = true;
  clearInterval(intervalId);
}

function updateView(hours, min, sec) {
  timer.querySelector("#hours").textContent = formatNumber(hours);
  timer.querySelector("#min").textContent = formatNumber(min);
  timer.querySelector("#sec").textContent = formatNumber(sec);
}

function resetTimer() {
  duration = 0;
  updateView(0, 0, 0);
  clearInterval(intervalId);
  paused = false;
  start.classList.remove("hidden");
}
