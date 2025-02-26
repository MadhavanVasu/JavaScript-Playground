let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P1 resolved");
    reject("P1 rejected");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 resolved");
    reject("P2 rejected");
  }, 3000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P3 resolved");
    reject("P3 rejected");
  }, 5000);
});

// any() API -> Promise.any()
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when all of the input's promises fulfill
// (including when an empty iterable is passed), with an array of the fulfillment values.
// It rejects when any of the input's promises rejects, with this first rejection reason.

// Returns an array of fulfilled values if all the promises resolves
// else throws an exception with reason as the first rejected promise.
Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err);
  });

Promise.all([]).then((res) => {
  console.log(res);
});

// allSettled() API -> Promise.allSettled()
Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// race() API -> Promise.race()
Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// any() API => Promise.any()
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// If all the of the promises reject, it throws AggregateError
// Using .errors we can get the array of error messages
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
    console.log(err.errors);
  });
