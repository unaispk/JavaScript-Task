
console.log('Arithmetic Operators');
let a = 10
let b = 20

console.log(`Addition of ${a} and ${b} is ${a+b}\n`);
console.log(`Substraction of ${b} and ${a} is ${b-a}\n`);
console.log(`Multiplication of ${a} and ${b} is ${a*b}\n`);
console.log(`Division of ${b} and ${a} is ${b/a}\n`);
console.log(`Modulas of ${b} and ${a} is ${b%a}\n`);
console.log(`Modulas of ${a} and ${b} is ${a%b}`);


console.log('\n\nComparison Operators\n\n');
let x = 10;
let y = 5;
let z = "10"

console.log(x==y);
console.log(x!=y);

console.log(x==z);
console.log(x===z);

console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);

console.log('\n\nLogical Operators\n\n');

let c = 5;
let d = 8;

console.log(c<d && d>c);
console.log(c<d && d<c);
console.log(c>d && d<c);

console.log(c==8);
console.log(!(c==8));


console.log(c>d||d>c);

//Terinory Operator

console.log("Terinory Operator");

let isRaining = true
isRaining ? console.log("\nNeed a rain coat") : console.log("\nNo need for rain coat");

let rain = false
rain ? console.log("\nNeed a rain coat") : console.log("\nNo need for rain coat");

