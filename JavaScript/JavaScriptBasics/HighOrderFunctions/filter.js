// filter() doesn't modify the original array; it creates a new one. The callback function accepts three arguments: the current element,
// its index, and the original array (although you might not need all of them in every case).
// It's often used with other array methods like map() and reduce() to create concise and expressive data manipulation workflows.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers);