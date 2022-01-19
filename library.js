

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      !this.read ? "not read yet" : "have read!"
    }`;
  };
}

function addBookToLibrary(book, arr) {
  arr.push(book);
  return arr;
}

function removeBookfromLibrary(index, arr) {
    return arr.splice(index, 1);
}

function displayBooks(arr) {
    arr.forEach(book => console.log(book.info()));
}


let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let gatsby = new Book ("The Great Gatsby", "F. Scott Fitzgerald", 350, true);
let catch22 = new Book ("Catch-22", "Joseph Heller", 400, true);
let theStranger = new Book("The Stranger", "Albert Camus", 250, true);
let hamlet = new Book("Hamlet", "William Shakespeare", 150, true);

addBookToLibrary(theHobbit, myLibrary);
addBookToLibrary(gatsby, myLibrary);
addBookToLibrary(catch22, myLibrary);
addBookToLibrary(theStranger, myLibrary);
addBookToLibrary(hamlet, myLibrary);

console.log(theHobbit.info());

displayBooks(myLibrary);
//console.log(myLibrary);


