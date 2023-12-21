// Given an array of numbers, use the map function to calculate the square root of 
// each number and create a new array containing the square roots.

const numbers = [ 16, 64, 4, 9, 25];
const sqrtOfNumbers = numbers.map((num) => Math.sqrt(num));
console.log(sqrtOfNumbers);