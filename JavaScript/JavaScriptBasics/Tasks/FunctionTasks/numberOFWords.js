// Create a function that takes a sentence and returns the number of words in the sentence.

function countWords(sentence) {
    // Remove extra spaces and split the sentence into an array of words
    const wordsArray = sentence.trim().split(/\s+/);
    
    return wordsArray.length;
  }
  
  const sentence = "This is a sample sentence.";
  const wordCount = countWords(sentence);
  console.log(wordCount); 
  