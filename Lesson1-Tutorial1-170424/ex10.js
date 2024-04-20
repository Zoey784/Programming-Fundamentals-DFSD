const prompt = require('prompt-sync')();

console.log("Please key in your birth year");
let num1 =  prompt("What is your birth year: ");

console.log("Please key in your current year");
let num2 = prompt("What is the current year: ");

let total = num2 - num1;


console.log(`You key in`);
console.log(`Birth year: ${num1}`)
console.log(`Current year: ${num2}`)
console.log(`Your age is: ${total}`)
