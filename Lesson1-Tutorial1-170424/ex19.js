const prompt = require('prompt-sync')();

let playerOneheight =  parseFloat(prompt("Enter Player One Height in cm: "));
let playerOneAge = parseInt(prompt("Enter Player One Age: "));

let playerTwoheight =  parseFloat(prompt("Enter Player Two Height in cm: "));
let playerTwoAge = parseInt(prompt("Enter Player Two Age: "));

let playerOneTotal = playerOneheight + (playerOneAge * 5);
let playerTwoTotal = playerTwoheight + (playerTwoAge * 5);

if (playerOneTotal > playerTwoTotal) {
    console.log("Player One win")
}
else if (playerOneTotal < playerTwoTotal) {
    console.log("Player Two win")
}
else{
    console.log("It’s a draw")
}

let playerThreeheight =  parseFloat(prompt("Enter Player Three Height in cm: "));
let playerThreeAge = parseInt(prompt("Enter Player Three Age: "));

let playerThreeTotal = playerThreeheight + (playerThreeAge * 5);

if ((playerOneTotal > playerTwoTotal) && (playerOneTotal >playerThreeTotal)) {
    console.log("Player One win")
}
else if ((playerTwoTotal > playerOneTotal) && (playerTwoTotal >playerThreeTotal)) {
    console.log("Player Two win")
}
else if ((playerThreeTotal > playerOneTotal) && (playerThreeTotal >playerTwoTotal)) {
    console.log("Player Three win")
}
else {
    console.log("It’s a draw")
}