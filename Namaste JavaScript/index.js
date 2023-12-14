// using this keyword chaning a variable in global scope
// function x() {
//   var a = 10;
//   this.a = 500;
//   console.log(a);
// }

// var a = 100;
// x();
// console.log(a);

// block scope
// for (var i = 0; i < 10; i++) {
//   var a = 100;
//   let b = 200;
// }

// console.log(a);
// console.log(i);
// console.log(b); // ReferenceError

// block scope, function scope and global scope
// var a = 50;
// function x() {
//   var a = 100;
//   {
//     let a = 20;
//     var b = 10;
//     console.log(a);
//     {
//       var c = 10;
//     }
//   }
//   console.log(a);
// }
// x();
// {
//   var y = 50;
// }
// console.log(a);

// let is block scoped

// function x() {
//   let a = 10;
//   {
//     // var a = 10;
//     let a = 19;
//     console.log(a);
//   }
// }
// let a = 50;
// x();
// console.log(a);

// =================================================================

// Closures -> Function bundled along with its references to its lexical environment.
// Though the execution context was closed it still holds references to those variables in parent lexical scope.

// function x() {
//   var a = 50;
//   function y() {
//     var b = 40;
//     function z() {
//       var c = 30;

//       console.log(a);
//       console.log(b);
//       console.log(c);
//       console.log(globalVar);
//     }
//     return z;
//   }
//   return y();
// }
// var func = x();
// func(); // Prints undefined for globalVar
// var globalVar = 10;
// func(); // Prints 10 for globalVar

// This will print "6" five times because, i is function scoped and each callback function is pointing to the same variable "i" and it prints 6.
// And by the time the setTimeout() has ended, the loop would have finished executing and all the callback function has i as 6.
// var is function scoped.

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x();

// Solution 1 for the above problem
// To use let as it is block scoped, so a new "i" variable is created for each iteration
// So the callback functions would be pointing to different i each time.

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x();

// Solution 2 for the above problem
// using var with closure.

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
// }
// x();

// Solution 3 for the above problem

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       var y = i;
//       console.log(y);
//     }, i * 1000);
//   }
// }

// x();

// =================================================================

// One of the use cases for Closures is Once FUnction
// Once functions can be ran only once

// function getOnceFunction() {
//   var count = 0;

//   function add(x, y) {
//     if (count < 1) {
//       count++;
//       return x + y;
//     }
//   }
//   return add;
// }

// // Can be ran only once
// var onceFn = getOnceFunction();
// console.log(onceFn(1, 2));
// console.log(onceFn(2, 3));

// // getOnceFunction is like a function factory
// // Everytime we call it we get a new function all together

// var secondOnceFn = getOnceFunction();
// console.log(secondOnceFn(1, 2));
// console.log(secondOnceFn(1, 2));

// =================================================================

// Shallow and Deep copy
// function counter() {
//   let count = 0;
//   function incrementCounter() {

//     count++;
//     console.log(count);
//   }
//   return incrementCounter;
// }

// // Objects, Functions, etc are shallow copied. So they point to the same memory location
// // Changing one affects the other.
// var myCounter = counter();
// myCounter();
// myCounter();
// var myCounter2 = myCounter;
// myCounter2();
// Both will point to the same function here.
// So same count value is incremented.

// // Primitive Types are deep copied.
// // Only the value is copied.
// // They won't point to the same memory location

// var a = 1;
// var b = a;
// a++;
// console.log(a);
// console.log(b);

// =============================================================

// Debouncing in JavaScript

// =============================================================

// First Class Functions -> The ability to treat functions as value and :
// 1. Assign function to a variable
// 2. Pass function as argument to another function
// 3. Return a function

// ----------------------------------------------------------------

// Function statement aka Function declaration :
// This normal way of creating a function is called function statement or declaration.
// function xyz() {
//   console.log("Hello World!");
// }

// ----------------------------------------------------------------

// Function expression :
// Assigning a anonymous to a variable (var, const or let)

// let and const behaves the same as usual
// Cannot access them anywhere in the Temporal Deadzone (Lines above the initialization of the variable)
// Allocated memory in a separate memory space in global scope (Script) and inside function assigned memory inside block scope (Block)
// let and const are block scopedF

// Throws error -> Not defined (const variable is not initialized)
// b();
// c();

// var a = xyz;

// let b = function () {
//   console.log("Hello World!");
// };

// const c = function x() {
//   console.log(x);
// };

// xyz();
// a();
// b();
// c();

// ----------------------------------------------------------------

// Anonymous Function
// A function without a name is Anonymous Function.
// In Function Statement we cannot use anonymous function
// In Function Expression we can use anonymous function
// Function Statement requires a function name and for Function Expression name is optional

// function () {
//     console.log("Hello World!");
// }

// ----------------------------------------------------------------

// Named Function Expression
// Assigning a named function to a variable is called as Named Function Expression
// var d = function y() {
//   console.log(y);
// };

// console.log(y); -> Throws error

// ----------------------------------------------------------------

// Parameters and Arguments

// The identifiers or variables which gets those values are knows as Parameters
// var x = function (a, b) {
//   console.log(a, b);
// };

// x(1, 2); // The values passed here are called as arguments

// ----------------------------------------------------------------

// First Class Functions or First Class Citizens

// The ability to use function as value and store it in a variable or pass as an argument or return from another function is knows as First Class Function

// var newFunc = function (a) {
//   return function () {
//     console.log("Hello World!");
//   };
// };

// newFunc(function () {
//   console.log("Function passed as argument");
// });

// Event Loop and Web APIs
// The callback function is pushed onto the stack by the event loop only after the stack is empty.
// Till that the callback functions (that are ready after the timer ends, in case of setTimeout()) are pushed onto the Callback Queue.
// Callback function for Promises and Mutation Observer are pushed onto the Microtask Queue
// Microtask queue are given higher priority than Callback Queue.
// This could lead to Starvation for callback functions in the Callback Queue.

console.log("Start!");

setTimeout(() => {
  console.log("Inside callback function 1");
  for (let i = 0; i <= 1000000000; i++) {}
  console.log("finished executing time consuming logic");
}, 1000);

for (let i = 0; i <= 100000; i++) {}

setTimeout(() => {
  console.log("Inside callback function 2");
}, 2000);

console.log("End!");
