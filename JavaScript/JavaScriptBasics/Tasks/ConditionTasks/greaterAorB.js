// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
const prompt = require('prompt-sync')();

// const a = 15;
// const b = 25;

// if (a === b) {
//     console.log(`${a} equal to ${b}`);
// }
// else if (a > b && a !== b) {
//     console.log(`${a} is greater than ${b}`);
// } else 
//     console.log(`${b} is greater than ${a}`);

// Other way

let a = parseInt(prompt("Enter value of a "));
let b = parseInt(prompt("Enter value of b "));

function greater(num1, num2) {
    if (a === b) {
        console.log(`${a} equal to ${b}`);
    } else {
        (a > b && a !== b) ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`);
    }
}
greater(a,b);