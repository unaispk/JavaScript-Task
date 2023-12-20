const prompt = require('prompt-sync')();

const number = prompt("Enter a number: ");

number % 2 == 0 ? console.log("The number is even") : console.log("The number is odd");