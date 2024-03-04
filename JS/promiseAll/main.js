function promiseAll(promises) {
  const outputs = [];
  let settledPromises = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((result) => {
          outputs[i] = result;
          settledPromises++;

          if (settledPromises === promises.length) resolve(outputs);
        })
        .catch(reject);
    });
  });
}

const promises = [
  Promise.resolve(3),
  Promise.resolve("hello"),
  Promise.reject(5),
];

promiseAll(promises)
  .then((result) => console.log(result))
  .catch(console.error);
