//  JavaScript Program to Check if the Numbers Have Same Last Digit

const prompt = require('prompt-sync')();

const a = parseInt(prompt('Enter first integer: '));
const b = parseInt(prompt('Enter second integer: '));


// find the last digit
const result1 = a % 10;
const result2 = b % 10;

// compare the last digits
if(result1 == result2 ) {
    console.log(`${a} and ${b} have the same last digit.`);
}
else {
    console.log(`${a} and ${b} have different last digit.`);
}