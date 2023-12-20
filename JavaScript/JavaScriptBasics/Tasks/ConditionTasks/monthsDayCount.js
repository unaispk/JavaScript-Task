const prompt = require('prompt-sync')();

function getDaysInMonth(month, year) {
    const months = [
        31, // January
        28, // February (assuming non-leap year)
        31, // March
        30, // April
        31, // May
        30, // June
        31, // July
        31, // August
        30, // September
        31, // October
        30, // November
        31  // December
    ];

    // Check for February in a leap year
    if (month === 2 && isLeapYear(year)) {
        return 29;
    }

    return months[month - 1]; // Month is 1-based, so subtract 1
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Example usage
const inputMonth = parseInt(prompt("Enter the month "));
const inputYear = parseInt(prompt("Enter the year ")); 

const daysInMonth = getDaysInMonth(inputMonth, inputYear);
console.log(`There are ${daysInMonth} days in the month of February ${inputYear}.`);
