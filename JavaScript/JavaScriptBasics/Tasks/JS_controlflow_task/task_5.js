// A prime number is a positive integer that is only divisible by 1 and itself. 
// For example, 2, 3, 5, 7, 11 
const prompt = require('prompt-sync')();

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if (number === 1) {
    console.log("1 is not a prime number.");
}

else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is not a prime number`);
    }
}
// if number is less than 1
else {
    console.log("The number is not a prime number");
}


