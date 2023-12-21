const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num%2==0);
const average = evenNumbers.reduce((sum, num) => sum + num, 0) / evenNumbers.length;
console.log(average);