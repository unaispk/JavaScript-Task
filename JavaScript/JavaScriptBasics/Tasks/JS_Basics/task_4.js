// Area of triangle is (base * height)/2
const prompt = require('prompt-sync')();

let triangleHeight = prompt("Enter the height of the triangle : ");
let triangleBase = prompt("Enter the base of the triangle : ");

let triangleArea = (triangleHeight * triangleBase) / 2 ;

console.log(`The area of the triangle is ${triangleArea}`);