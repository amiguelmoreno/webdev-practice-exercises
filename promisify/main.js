// function to promisify

const getSumAsync = (num1, num2, callback) => {
  if (!num1 || !num2) {
    return callback(new Error("Missing arguments"), null);
  }
  return callback(null, num1 + num2, `The sum is ${num1 + num2}`);
};

//promisification

const myPromisify = (fn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      function customCallback(err, ...results) {
        if (err) {
          return reject(err);
        }
        return resolve(results.length === 1 ? results[0] : results);
      }

      args.push(customCallback);

      fn.call(this, ...args);
    });
  };
};

//const getSumPromise = myPromisify(getSumAsync);
//getSumPromise(2, 3).then((result) => console.log(result)); // [6, 'Sum is 6']
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static getSumPromise = myPromisify(getSumAsync);
}

Product.getSumPromise(5, 6).then((result) => console.log(result));
