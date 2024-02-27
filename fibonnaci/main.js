function fibonacci(nth) {
  if (nth <= 0) return "positions starts at 1";
  let sum = 0;
  let currNum = 1;
  let prevNum = 1;
  if (nth === 1) return 0;
  if (nth === 2 || nth === 3) return 1;
  for (let i = 4; i <= nth; i++) {
    sum = currNum + prevNum;
    if (i === nth) return sum;
    prevNum = currNum;
    currNum = sum;
    sum = 0;
  }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
