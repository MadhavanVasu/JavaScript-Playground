function myFunc() {
  return "Hello, world!";
}

console.log(myFunc());

// =================================================================

// 1. Store function in a variable
let varFunc = myFunc;

// Prints the function code
console.log(varFunc);

// Prints the function return value
console.log(varFunc());

// =================================================================

// 2. Store function in an object
let myObj = {
  objFunc: myFunc,
};

console.log(myObj);
console.log(myObj.objFunc);

let func = myObj.objFunc;

// Both achieve the same result
console.log(myObj.objFunc());
console.log(func());

// =================================================================

// 3. Store function in an array

let arr = [myFunc, 1];

// Prints the array
console.log(arr);

// Prints the function code
console.log(arr[0]);

// Prints the functions return value
console.log(arr[0]());

// =================================================================

// Destructuring
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Syntax Error -> A rest element must be last in a destructuring pattern.
// const [a,...b,c] = arr;

// Correct syntax
const [a, b, ...c] = arr;


//
