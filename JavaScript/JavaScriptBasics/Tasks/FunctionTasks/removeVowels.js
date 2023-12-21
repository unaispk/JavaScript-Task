// Create a function that takes a string as input and returns the string with all vowels removed.

const prompt = require('prompt-sync')();

function removeVowels(input) {
    return inputString.replace(/[aeiouAEIOU]/g, '');
}
const inputString = prompt("Enter a string value :  ");

const result = removeVowels(inputString);
console.log(result);