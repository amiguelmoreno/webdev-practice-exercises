import { suggestions } from "./food";

const suggNoRepeated = [...new Set(suggestions)];
const autoInput = document.querySelector("#autocomplete-input");
const autocompleteList = document.querySelector("#autocomplete-list");
const itemSelected = document.querySelector("#item-selected");

let timeToSearch;

autocompleteList.addEventListener("click", (e) => {
  if (!e.target.closest(".item")) return;

  itemSelected.textContent = e.target.closest(".item").textContent;
  autoInput.value = "";
  autocompleteList.innerHTML = "";
});

autoInput.addEventListener("input", function (e) {
  if (timeToSearch) clearTimeout(timeToSearch);
  timeToSearch = setTimeout(() => showSuggest(e.target.value), 200);
});

function showSuggest(string) {
  autocompleteList.innerHTML = "";

  suggNoRepeated
    .filter((word) =>
      word.toLowerCase().startsWith(string.trim().toLowerCase())
    )
    .slice(0, 5)
    .map(
      (word) =>
        (autocompleteList.innerHTML += `<div class="item" id="${word.toLowerCase()}">${word}</div>`)
    );
}
