// Given an array of mixed data types, filter out the numbers,
// map them to their squares, and then use reduce to find their sum

const mixedArray = [1, 'apple', 3, 'banana', 5, 6];

const numbers = mixedArray.filter(item => typeof item === 'number');
const squareOfNum = numbers.map(num => num*num);
const sumOFSquareOfNum = squareOfNum.reduce((sum,num) => sum+num);
console.log(sumOFSquareOfNum);

