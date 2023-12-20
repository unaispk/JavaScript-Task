// JavaScript Program to Find the Factors of a Number

// To be the factors of a number, the factor number should exactly divide the number (with 0 remainder).
// For example, The factor of 12 is 1, 2, 3, 4, 6, and 12.
const prompt = require('prompt-sync')();


const num = parseInt(prompt('Enter a positive number: '));

console.log(`The factors of ${num} :\n`);

for(let i = 1; i <= num; i++) {

    if(num % i == 0) {
        console.log(i);
    }
}
