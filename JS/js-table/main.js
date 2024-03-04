import "./style.css";

const form = document.getElementById("form");
const columns = document.getElementById("columns");
const rows = document.getElementById("rows");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const numColumns = +columns.value;
  const numRows = +rows.value;

  if (isNaN(numColumns) || isNaN(numRows) || numColumns <= 0 || numRows <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  const tableContainer = document.getElementById("table-container");
  const table = document.createElement("table");

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < numColumns; j++) {
      const cell = document.createElement("td");
      cell.textContent = `${i * numColumns + j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  tableContainer.innerHTML = "";
  tableContainer.append(table);
}
