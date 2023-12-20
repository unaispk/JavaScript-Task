const prompt = require('prompt-sync')();

const month = prompt('Enter a month  ').toLowerCase();
let season;

switch (month) {
  case 'december':
  case 'january':
  case 'february':
    season = 'Winter';
    break;
  case 'march':
  case 'april':
  case 'may':
    season = 'Spring';
    break;
  case 'june':
  case 'july':
  case 'august':
    season = 'Summer';
    break;
  case 'september':
  case 'october':
  case 'november':
    season = 'Autumn';
    break;
  default:
    console.log('Invalid month. Please enter a valid month.');
}
console.log(`The season is ${season}`);
