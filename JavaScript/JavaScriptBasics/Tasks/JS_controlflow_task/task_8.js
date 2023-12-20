// JavaScript Program to Display the Multiplication Table

const prompt = require('prompt-sync')();

const inputNumber = prompt("Enter the number : ");

function displayMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${i} * ${number} = ${result}\n`);
    }
}

displayMultiplicationTable(inputNumber);