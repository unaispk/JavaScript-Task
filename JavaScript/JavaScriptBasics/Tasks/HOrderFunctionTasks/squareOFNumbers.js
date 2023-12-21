// Given a range of numbers (e.g., 1 to 10), use the map function
// to create an array containing the squares of these numbers.

const numbers = [1,2,3,4,5,6,7,8,9,10];

const numbersSquare = numbers.map((num) => num*num);
console.log(numbersSquare);