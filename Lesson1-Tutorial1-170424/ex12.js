const prompt = require('prompt-sync')();

console.log("Please enter some numbers");
let num1 =  parseInt(prompt("Enter First Number: "));
let num2 = parseInt(prompt("Enter Second number: "));
let num3 = parseInt(prompt("Enter Third number: "));
let num4 = parseInt(prompt("Enter Fouth number: "));

let total = (num1 + num2 + num3 + num4) / 4;
console.log('Here is the average of the total number you enter')
console.log(`Your first number is ${num1}, second number is ${num2} third number is ${num3} fouth number is ${num4}. Total added is ${total}.`);