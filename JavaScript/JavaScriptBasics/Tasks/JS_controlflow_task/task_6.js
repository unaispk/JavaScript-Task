// program to print prime numbers between the two numbers

const prompt = require('prompt-sync')();

const startNumber = parseInt(prompt('Enter starting number: '));
const endNumber = parseInt(prompt('Enter ending number: '));

console.log(`The prime numbers between ${startNumber} and ${endNumber} are:`);


// looping from starting to ending
for (let i = startNumber; i <= endNumber; i++) {
    let flag = 0;
    // prime number are starting from 2 
    for (let j = 2; j < i; j++) {
        if(i % j == 0) {
            flag = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}