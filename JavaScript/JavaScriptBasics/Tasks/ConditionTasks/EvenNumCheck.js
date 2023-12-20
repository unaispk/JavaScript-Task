const prompt = require('prompt-sync')();

const num = prompt("Enter a number ");

num % 2 == 0 ? console.log("Even number") : console.log("Not an even number");