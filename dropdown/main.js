const dropdownBtn = document.querySelector(".drowpdown-btn");
const arrow = document.querySelector(".arrow");
const car = document.querySelector(".car-selected");
//const cars = document.querySelectorAll(".car");
const dropdownList = document.querySelector(".drowpdown-list");

dropdownBtn.addEventListener("click", function () {
  arrow.classList.toggle("rotate");
  dropdownList.classList.toggle("hidden");
});

dropdownList.addEventListener("click", function (e) {
  if (!e.target.classList.contains("car")) return;

  car.textContent = e.target.id;
});
