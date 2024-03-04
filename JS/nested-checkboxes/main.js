const list = document.querySelector(".check-list");

/* console.log(list.querySelectorAll('input[type="checkbox"]')); */

list.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.type === "checkbox") return;

  const allChildCheck = target.parentNode.querySelectorAll(
    'input[type="checkbox"]'
  );

  allChildCheck.forEach((input) => {
    input.checked = target.checked;
  });
});
