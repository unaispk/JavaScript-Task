// JavaScript program for simple calculator 

const prompt = require('prompt-sync')();


function add(num1, num2) { 
	return num1 + num2; 
} 
function subtract(num1, num2) { 
	return num1 - num2; 
} 

function multiply(num1, num2) { 
	return num1 * num2; 
} 
function divide(num1, num2) { 
if(num2 === 0) return undefined; 
	return num1 / num2; 
} 


let num1 = prompt("\nEnter first number : "); 
let num2 = prompt("\nEnter second number : "); 
let operation = prompt("Enter operation (+, -, *, /)  : ");

let result; 

switch (operation) { 
	case "+": 
		result = add(num1, num2); 
		break; 
	case "-": 
		result = subtract(num1, num2); 
		break; 
	case "*": 
		result = multiply(num1, num2); 
		break; 
	case "/": 
		result = divide(num1, num2); 
		break; 
	default: 
		result = "Invalid operation"; 
} 
// Printing the final result 
console.log("The Result of this operation is : " + result);
