// =================================================================

// https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma
// https://www.youtube.com/watch?v=1Z7FjG--F20

// =================================================================

const x = 10;

async function myFunc() {
  console.log("Requesting...");
  //   const response = fetch("https://rickandmortyapi.com/api/character/2")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       return res;
  //     });

  // The json() method of the Response interface takes a Response stream and reads it to completion.
  // It returns a promise which resolves with the result of parsing the body text as JSON.
  // Note that despite the method being named json(),
  // The result is not JSON but is instead the result of taking JSON as input
  // and parsing it to produce a JavaScript object.

  const newResponse = await (
    await fetch("https://rickandmortyapi.com/api/character/2")
  ).json();

  console.log(newResponse);
  console.log("Got the response");
  return newResponse;
}

console.log(myFunc());
console.log("Function call done");

for(let i=0; i<1000000000; i++){
}
