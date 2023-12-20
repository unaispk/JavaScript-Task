// Compare the values of myAge and yourAge using if … else. 
// Based on the comparison and log the result to console stating who is older (me or you).
// Use prompt(“Enter your age:”) to get the age as input.

const prompt = require('prompt-sync')();
const myAge = 24;
const yourAge = prompt("Enter your age : ");

if(yourAge === myAge )
    console.log("We are same age");
else{
    (yourAge < myAge && yourAge !== myAge ) ? console.log("I'm older than you") : console.log("You're older than me");
}

    