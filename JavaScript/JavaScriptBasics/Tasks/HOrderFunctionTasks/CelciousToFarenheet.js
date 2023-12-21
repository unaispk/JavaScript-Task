// Given an array of temperatures in Celsius, use the map function to convert
// each temperature to Fahrenheit and create a new array with the converted temperatures.

const celsius = [0, 20, 30, 40, 100];

const Fahrenheit = celsius.map((cels) => (cels * (9/5) + 32));
console.log(Fahrenheit);