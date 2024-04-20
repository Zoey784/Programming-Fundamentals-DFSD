//swapping with temp value
let a = 5;
let b = 10;
let temp = 0;
// temp = a;
// a = b;
// b = temp;

//console.log(`A ${a}, B ${b}`);

//swapping with no temp
a = a + b; // (a)5 + (b)10 = (a)15
b = a - b; // (a)15 - (b)10 = (b)5
a = a - b; // (a)15 - (b)5 = (a)10

console.log(`A ${a}, B ${b}`);