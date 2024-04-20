const prompt = require('prompt-sync')();

let X =  parseInt(prompt("Enter dollar: "));
let Y =  parseInt(prompt("Enter cents: "));
let Z =  parseInt(prompt("Enter muffin: "));

Y = Y/100

let total = (X + Y) * Z
let dollar = (total)
let cents = (total % 1)*100

console.log(`Total cost of ${Z} muffins is $${Math.round(total)} and ${cents.toFixed(0)}cents ($${total.toFixed(2)})`);

//cher
// let x = Number.parseInt(prompt("Dollar: "));
// let y = Number.parseInt(prompt("Dollar: "));
// let z = Number.parseInt(prompt("Dollar: "));

// let totalcost = 0;
// if (z > 0) {
//     totalcost = z* (x + 100 + y);
// }
// console.log(`Total cost of ${z} muffins is $${Math(totalcost/100)} and ${totalcost%100}cents ($${totalcost})`);
