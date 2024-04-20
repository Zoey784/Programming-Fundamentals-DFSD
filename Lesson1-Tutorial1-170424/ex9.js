const prompt = require('prompt-sync')();

console.log("Please input");
let num1 =  prompt("Enter First Number: ");
let num2 = prompt("Enter Second number: ");

let total = num1 * num2;
console.log(`Your first number is ${num1} and second number is ${num2}. Total added is ${total}.`);