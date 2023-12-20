const prompt = require('prompt-sync')();

const number = parseInt(prompt("Enter a number : "));
let result;
for ( i = 1; i <= 10; i++ ) {
    result =  i * number;
    console.log(`${i} * ${number} = ${result}\n`);
}