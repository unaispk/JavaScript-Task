// Given an array of objects representing books, where each object has a "title" property, 
// use the map() function to create a new array containing only the titles of the books.
// const books = [{ title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
// { title: "To Kill a Mockingbird", author: "Harper Lee" },{ title: "1984", author: "George Orwell" }];

const books = [{ title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
               { title: "To Kill a Mockingbird", author: "Harper Lee" },
               { title: "1984", author: "George Orwell" }];
const booksTitles = books.map((book)=>book.title)
console.log(booksTitles);
