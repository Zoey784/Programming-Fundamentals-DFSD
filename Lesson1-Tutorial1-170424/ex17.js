let score = 80;
if (score >= 90) {
    console.log("You have gotten a A");
}
else if (score >= 80) {
    console.log("You have gotten a B");
}
else if (score >= 70) {
    console.log("You have gotten a C");
}
else if (score >= 60) {
    console.log("You have gotten a D");
}
else {
    console.log("You have gotten a F");
}

switch (true){
    case score >= 90: 
        console.log("You have gotten a A");
        break;
    case score >= 80:
        console.log("You have gotten a B");
        break;
    case score >= 70:
        console.log("You have gotten a C");
        break;
    case score >= 60:
        console.log("You have gotten a D");
        break;
    case score < 60:
        console.log("You have gotten a F");
        break;
    default: 
        console.log("Null");
}