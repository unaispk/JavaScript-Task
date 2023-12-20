const prompt = require('prompt-sync')();

const number = parseInt(prompt("Enter a number"));

let months = ['january','february','march','april',',may','june','july','august','september','october','november','december'];

let result; 
for (let i = 0; i < 12; i++) {
    if(number == i) {
        result = months[i-1]
    }
}
console.log(result);