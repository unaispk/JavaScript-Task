// Factorial of a number

const prompt = require('prompt-sync')();

let num = prompt("Enter a number : ");
function factorial(n) {
    let ans = 1;
    if (n == 0)
        return 1;

    for (let i = 2; i <= num; i++)
        ans = ans * i;
    return ans;
}

console.log(`factorial of ${num} is ${factorial(num)}`);