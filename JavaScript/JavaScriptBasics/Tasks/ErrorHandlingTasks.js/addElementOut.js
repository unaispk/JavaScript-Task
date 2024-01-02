const myList = [1, 2, 3, 4, 5];

try {
  myList[7] = 10; 
} catch (error) {
  if (error instanceof RangeError) {
    console.error("Range error: Index 7 is out of bounds for the list of length", myList.length);
  } else {
    throw error; 
  }
}

console.log(myList);