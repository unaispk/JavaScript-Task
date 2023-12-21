// Create a function that calculates the total sum of numbers in an array using reduce.

const numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc,num) => acc+num);
console.log(sum);