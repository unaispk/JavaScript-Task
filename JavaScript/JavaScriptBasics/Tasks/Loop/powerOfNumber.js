let n = 5;
let power = 3;
let num = 1;

let i = 0;

do {
    num = num * n;
    i++;

} while (i < power);

console.log(`power of ${n} is ${num}`);