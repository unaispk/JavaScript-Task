const myArray = [1, 2, 3];

try {
  console.log(myArray[5]); 
} catch (error) {
  if (error instanceof RangeError) {
    console.error("Index out of bounds:", error.message);
  } else {
    throw error; 
  }
}
