// Q3: Library Management System
// Run with: node q3.js
const readline = require("readline");

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) {
      return `"${this.title}" is already issued.`;
    }
    this.isIssued = true;
    return `"${this.title}" has been issued.`;
  }

  returnBook() {
    if (!this.isIssued) {
      return `"${this.title}" was not issued.`;
    }
    this.isIssued = false;
    return `"${this.title}" has been returned.`;
  }
}

const library = [
  new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
  new Book("Wings of Fire", "A.P.J. Abdul Kalam", "ISBN002"),
  new Book("Clean Code", "Robert C. Martin", "ISBN003"),
  new Book("Deep Work", "Cal Newport", "ISBN004"),
];

function showAvailableBooks() {
  console.log("\nAvailable books:");
  const available = library.filter((b) => !b.isIssued);
  if (available.length === 0) {
    console.log("No books available right now.");
  }
  available.forEach((b) => console.log(`- ${b.title} by ${b.author} (${b.ISBN})`));
}

// search the library by ISBN and issue the book if it exists
function issueByISBN(isbn) {
  const book = library.find((b) => b.ISBN.toLowerCase() === isbn.trim().toLowerCase());
  if (!book) {
    return "No book found with that ISBN.";
  }
  return book.issueBook();
}

showAvailableBooks();

// ask the user for an ISBN in the terminal
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("\nEnter ISBN to issue: ", (isbn) => {
  console.log(issueByISBN(isbn));
  showAvailableBooks();
  rl.close();
});
