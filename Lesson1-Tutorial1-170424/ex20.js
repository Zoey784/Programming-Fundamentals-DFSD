const prompt = require('prompt-sync')();

let psi =  parseFloat(prompt("Enter PSI Level: "));

console.log(`PSI: ${psi}`)

if (psi >= 100) {
    console.log("Unhealthy");
}
else if(psi >= 50) {
    console.log("Moderate");
}
else {
    console.log("Healthy");
}