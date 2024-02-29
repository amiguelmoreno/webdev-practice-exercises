const currFrom = document.querySelector("#curr-from");
const currTo = document.querySelector("#curr-to");
const result = document.querySelector("#result");
const amount = document.querySelector("#amount");
const conversionBtn = document.querySelector("#conversion-btn");

const APIKEY = "fca_live_jcyiTvM5irhM9VVWH2RsZnG6Ok9N8Be09JhufNFB";

let currencies = {};

function renderCurr() {
  Object.keys(currencies).forEach((curr) => {
    currFrom.innerHTML += `<option value="${curr}">${curr}</option>`;

    currTo.innerHTML += `<option value="${curr}">${curr}</option>`;
  });
}

async function getCurrAPI() {
  const request = await fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${APIKEY}`
  );
  const data = await request.json();
  currencies = data.data;
  renderCurr();
}
getCurrAPI();

conversionBtn.addEventListener("click", getConversion);

function getConversion() {
  if (Object.keys(currencies).length === 0) return;
  if (!amount.value) return;

  console.log(currFrom.value, amount.value);

  const startValue = Number(amount.value).toFixed(2);
  const finalValue = Number(
    (+amount.value / +currencies[currFrom.value]) * +currencies[currTo.value]
  ).toFixed(2);
  console.log(startValue);
  console.log(+finalValue);
  console.log(currencies);

  result.textContent = `${startValue} ${currFrom.value} are ${finalValue} ${currTo.value}`;

  amount.value = "";
}
