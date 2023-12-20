const prompt = require('prompt-sync')();

const score = parseFloat(prompt("Enter your score: "));

if (score >= 0 && score <= 100) { 
  switch (true) { 
    case score >= 80:
      console.log('A');
      break;
    case score >= 70:
      console.log('B');
      break;
    case score >= 60:
      console.log('C');
      break;
    case score >= 50:
      console.log('D');
      break;
    case score >= 40:
      console.log('E');
      break;
    default: 
      console.log('F');
  }
} else {
  console.log('Invalid Entry');
}
