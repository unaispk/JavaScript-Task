const prompt = require('prompt-sync')();
let number = prompt("Enter the number which you want to find the square root : ");

let result = Math.sqrt(number);

console.log(`The Square root of ${number} is ${result}`);