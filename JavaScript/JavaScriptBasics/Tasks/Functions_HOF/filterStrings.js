// Given an array of strings, return a new array that 
// includes only the strings with a length greater than 5.

const strings = ["apple", "banana", "orange", "grapes", "watermelon", "kiwi"];

const result = strings.filter((str) => str.length > 5);
console.log(result);