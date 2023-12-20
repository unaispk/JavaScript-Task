//   1 kilometer is equal to 0.621371 miles
const prompt = require('prompt-sync')();

const kilometer = prompt("Enter the kilometer value to convert : ");

const factor = 0.621371

const miles = kilometer * factor;

console.log(`${kilometer} kilometer is equal to ${miles.toFixed(2)} miles` );

