// Write a function that takes an array of numbers and returns a new array where each number is doubled.

function double(arr) {
    let doubledNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        doubledNumbers.push(arr[i] * 2);
    }
    return doubledNumbers;
}

const array = [1, 2, 3, 4, 5];

const result = double(array);
console.log(result);