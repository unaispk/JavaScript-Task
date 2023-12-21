const prompt = require('prompt-sync')();

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
const inputYear = parseInt(prompt('Enter a year '));


if (isLeapYear(inputYear)) {
    console.log(`${inputYear} year is leap year`);
} else {
    console.log(`${inputYear} year is not a leap year`);
}