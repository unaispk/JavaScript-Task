const prompt = require("prompt-sync")();
const PI = Math.PI;

function AreaOFCircle(r) {
    return PI*(r*r);
};

let radius = parseInt(prompt("Enter the radius of the circle  "));
if(!isNaN){
    console.log(AreaOFCircle(radius).toFixed(2));
} else {
    console.log("Please enter a valid input ");
}