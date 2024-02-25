// flat, filter, map, reduce, concat

//flat

const arr2 = [0, 1, [2, [3, [4, 5]]]];

Array.prototype.myFlat = function (depth = 1) {
  let finalArr = [];

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth !== 0) {
      finalArr = finalArr.concat(this[i].myFlat(depth - 1));
    } else finalArr.push(this[i]);
  }

  return finalArr;
};

//console.log(arr2.myFlat());

//filter

const words = ["spray", "elite", "exuberant", "destruction", "present"];

Array.prototype.myFilter = function (condition) {
  let finalArr = [];

  for (let i = 0; i < this.length; i++) {
    if (condition(this[i])) finalArr.push(this[i]);
  }

  return finalArr;
};

//console.log(words.myFilter((word) => word.length > 6));

// map

const wordsMap = ["spray", "elite", "exuberant", "destruction", "present"];

Array.prototype.myMap = function (action) {
  let finalArr = [];

  for (let i = 0; i < this.length; i++) {
    finalArr.push(action(this[i]));
  }

  return finalArr;
};

// console.log(words.myMap((word) => word.slice(2)));

//reduce

const wordsArray = ["spray", "elite", "exuberant", "destruction", "present"];

Array.prototype.myReduce = function (action, initialValue = "") {
  let finalResult = initialValue;

  for (let i = 0; i < this.length; i++) {
    finalResult = action(finalResult, this[i]);
  }

  return finalResult;
};

//console.log(words.myReduce((words, word) => words + word));
//console.log(words.reduce((words, word) => words + word));

//concat

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

Array.prototype.myConcat = function (arr) {
  return [...this, ...arr];
};

console.log(array1.myConcat(array2));
console.log(array1.concat(array2));
