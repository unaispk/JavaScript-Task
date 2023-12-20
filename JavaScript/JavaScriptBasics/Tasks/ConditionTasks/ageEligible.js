//  Get user input using prompt(“Enter your age:”).
//  If user is 18 or older , give feedback:'You are old enough to drive'
//  but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const prompt = require('prompt-sync')();

const input = prompt("Enter your age : ");

input >= 18 ? console.log('You are old enough to drive') : console.log(`Please wait ${18 - input} more years\t
You're not old enough to drive`);