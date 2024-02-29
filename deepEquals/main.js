function deepEquals(valueOne, valueTwo) {
  if (valueOne === valueTwo) return true;

  if (
    typeof valueOne !== "object" ||
    typeof valueTwo !== "object" ||
    typeof valueTwo === "null" ||
    typeof valueOne === "null"
  )
    return false;

  const keysOne = Object.keys(valueOne);
  const keysTwo = Object.keys(valueTwo);

  if (keysOne.length !== keysTwo.length) return false;

  for (const key of keysOne) {
    if (!keysTwo.includes(key) || !deepEquals(valueOne[key], valueTwo[key]))
      return false;
  }

  return true;
}

console.log(deepEquals({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEquals({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEquals({ a: 1, b: { c: 2 } }, { a: 1, b: { d: 2 } })); // false
console.log(deepEquals(42, 42)); // true
console.log(deepEquals([1, 4, 3, ["Hola", 5, 4]], [1, 4, 3, ["Hol", 5, 4]])); // false
console.log(deepEquals([1, 4, 3, ["Hola", 5, 4]], [1, 4, 3, ["Hola", 5, 4]])); // true
console.log(deepEquals("hello", "world")); // false
