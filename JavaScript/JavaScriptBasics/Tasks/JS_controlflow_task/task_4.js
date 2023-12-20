const prompt = require('prompt-sync')();


function highest(num1, num2, num3)
{
    return Math.max(num1, num2, num3);  
}
console.log("Enter three numbers");
let num1 = prompt("")
let num2 = prompt("")
let num3 = prompt("")

console.log(`Highest number is ${highest(num1, num2, num3)}`);
