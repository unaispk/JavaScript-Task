// Write a function that filters positive numbers from
// an array of mixed positive and negative numbers using the filter method

const numbers = [0,1,2,-3,4,-5,-6,6,-8,9,10,-10,-12];

const positiveNumbers = numbers.filter((num) => num > 0)

console.log(positiveNumbers);