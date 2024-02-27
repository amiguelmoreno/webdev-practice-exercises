Array.prototype.flatDeep = function () {
  let result = [];

  for (const value of this) {
    if (Array.isArray(value)) {
      result.push(...value.flatDeep());
    } else {
      result.push(value);
    }
  }

  return result;
};

console.log(
  [
    [1, 2, [3, 4]],
    [5, [6, [7, 8]], 9],
    [10, 11, [12, [13, 14, 15]]],
  ].flatDeep()
);
