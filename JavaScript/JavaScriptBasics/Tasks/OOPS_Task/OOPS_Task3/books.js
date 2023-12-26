class Books {
    constructor() {
      this.bookNames = [];
      this.bookPrices = [];
    }
  
    myBooks(...books) {
      if (books.length !== 5) {
        console.log('Please provide 5 book names.');
        return;
      }
      this.bookNames = books;
    }
  
    price(...prices) {
      if (prices.length !== 5) {
        console.log('Please provide prices for 5 books.');
        return;
      }
      this.bookPrices = prices;
    }
  
    printBooks() {
      if (this.bookNames.length !== 5 || this.bookPrices.length !== 5) {
        console.log('Please set all 5 book names and prices first.');
        return;
      }
  
      console.log('Books and their prices:');
      for (let i = 0; i < this.bookNames.length; i++) {
        console.log(`${this.bookNames[i]} - $${this.bookPrices[i]}`);
      }
    }
  }
  
  let myLibrary = new Books();
  myLibrary.myBooks('Book 1', 'Book 2', 'Book 3', 'Book 4', 'Book 5');
  myLibrary.price(10, 15, 20, 12, 18);
  myLibrary.printBooks();
  