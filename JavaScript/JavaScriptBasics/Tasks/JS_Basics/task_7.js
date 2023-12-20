const prompt = require('prompt-sync')();

const pi = Math.PI

function findCircleArea (r) {
    return(pi * r * r);
}

let r = prompt("Enter the radius : ");
let area = findCircleArea(r);

console.log(`Area of the circle is ${area.toFixed(2)}`);