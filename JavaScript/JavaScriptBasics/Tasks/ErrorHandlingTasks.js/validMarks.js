function validateAndProcessMarks(marks) {
    try {
      if (marks < 0) {
        throw new Error("Marks cannot be negative.");
      } else {
        console.log("Marks are valid:", marks);
      }

    } catch (error) {
      console.error("Invalid marks input:", error.message);
    }
  }
  
  validateAndProcessMarks(-58);  
  