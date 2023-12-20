const prompt = require('prompt-sync')();

const day = prompt("Enter the day ").toLowerCase();

switch (day) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day} is a working day.`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${day} is a weekend day.`);
        break;
    default:
        console.log('Please enter a valid day of the week.');
}