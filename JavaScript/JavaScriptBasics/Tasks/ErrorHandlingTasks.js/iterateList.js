const myList = [1, 2, 3];

for (let i = 0; i <= myList.length; i++) { 
  try {
    console.log(myList[i]);
  } catch (error) {
    if (error instanceof RangeError) {
      console.error("Range error: Index out of bounds");
      break; // Exit the loop if an error occurs
    } else {
      throw error; // Rethrow other errors
    }
  }
}
