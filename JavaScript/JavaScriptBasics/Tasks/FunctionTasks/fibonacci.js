// Write a function that returns the Fibonacci sequence up to a specified number of

const prompt = require('prompt-sync')();

function fibonacciSequence(numTerms) {
    if (numTerms <= 0) {
        return [];
    } else if (numTerms === 1) {
        return [0];
    } else if (numTerms === 2) {
        return [0, 1];
    } else {
        let sequence = [0, 1];
        for (let i = 2; i < numTerms; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }
}

const numTerms = prompt("Enter number of terms");
const fibonacci = fibonacciSequence(numTerms);
console.log("The Fibonacci sequence up to", numTerms, "terms is:", fibonacci);
