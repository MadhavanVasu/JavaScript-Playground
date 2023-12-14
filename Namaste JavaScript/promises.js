const promise = fetch("https://rickandmortyapi.com/api/character/2");

console.log(promise);

promise.then((data) => {
  console.log(data);
});

// for (var i = 0; i < 1000000000; i++) {}
console.log("For loop completed");
console.log(promise);

let cart = ["Shirt", "Pant", "Shoes"];
// let pr = createOrderAPI(cart);

// console.log(pr);

// pr.then((orderId) => {
//   console.log("Order ID: ", orderId);
// });

createOrderAPI(cart)
  .then((orderId) => {
    console.log("Order was successfully created");
    return orderId;
  })
  .catch((err) => {
    console.log("Error: ", err);
  })
  .then((orderId) => {
    return processPayment(orderId);
  })
  .then((data) => {
    console.log(data);
    return data[1];
  })
  .catch((err) => {
    console.log("Error: ", err);
  })
  .then((orderId) => {
    return orderSummary(orderId);
  })
//   .catch((err) => {
//     console.log("Error message before resolving promise");
//   })
  .then((summary) => {
    console.log(summary);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

function validateOrder(cart) {
  return true;
}

function createOrderAPI(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateOrder(cart)) {
      let err = new Error("Error message");
      reject(err);
    }
    // make a Database call to create order
    let orderId = 12345;
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function processPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) resolve(["Payment processed", orderId]);
    else reject(new Error("Payment was not successful"));
  });
}

function orderSummary(orderId) {
  return new Promise((resolve, reject) => {
    if (!orderId) resolve("Order ID is : " + orderId);
    else reject(new Error("Order not created"));
  });
}
