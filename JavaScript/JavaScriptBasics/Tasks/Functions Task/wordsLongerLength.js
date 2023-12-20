// Create a function that filters words longer than a specified length from an array of strings using the filter method.

const prompt = require('prompt-sync')();

const randomString = ["How are you", "Hello", "hi", "good morning all of you", "good night" ];

let greetLength = parseInt(prompt("Enter the length limit : "));

result = randomString.filter((greet) => greet.length > greetLength);

console.log(result);