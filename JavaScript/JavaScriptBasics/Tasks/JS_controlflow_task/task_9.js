//  JavaScript Program to Print the Fibonacci Sequence


//  The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1.
//  After that, the next term is defined as the sum of the previous two terms.

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series :\n');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}