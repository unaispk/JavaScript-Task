const prompt = require('prompt-sync')();
 
let isRaining = true;

let a = prompt('Enter a value');

if(a > 0) {
    console.log(`${a} is positive number`);
} else {
    console.log(`${a} is negetive number`);
}


if (isRaining) {
    console.log("need a coat");
} else {
    console.log("no need a coat");
} 