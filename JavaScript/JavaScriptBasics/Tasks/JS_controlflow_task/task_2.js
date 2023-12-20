// positive negetive or zero

const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number "));

if (num > 0) {
    console.log("The value you entered is positive");
} else if (num < 0) {
    console.log("The value you entered is negetive");
} else
    console.log("You entered Zero");


