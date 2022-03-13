import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];
//** FUNCTION */
// most basic function in js
// function square(x) {
//   return x * x;
// }

// const newNumber = numbers.map(square);
// console.log(newNumber);

//annonymous function
// 1 st way
// const newNumbers=numbers.map(function square(x){
//   return x*x;
// });
// console.log(newNumbers);

//or

//2 nd way we can delete the name of anonymous fun
// const newNumbers=numbers.map(function (x){
//   return x*x;
// });
// console.log(newNumbers);

//arrow function
//1st way
// const newNumbers = numbers.map((x) => {
//   return x * x;
// });
// console.log(newNumbers);

//2nd way
// const newNumbers = numbers.map((x) => x * x);
// console.log(newNumbers);
//**FUNCTION */

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

const newNumbersMap = numbers.map((x) => x * 2);

////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

const newNumbersFilter = numbers.filter((num) => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

var newNumberReduce = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

const newNumberFind = numbers.find((num) => num > 10);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

const newNumberFindIndex = numbers.findIndex((num) => num > 10);
