let a = 10
let b = 20
let temp;

temp = a;
a = b;
b = temp;

console.log(`a = ${a} \nb = ${b}\n`);
// ____________________________________________

let x = 5
let y = 15

x = x + y
y = x - y
x = x - y

console.log(`x = ${x} \ny = ${y}`);