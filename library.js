let myLibrary = [];

/*
Create a book object and define the functions to add, remove, and display books to the library.
*/
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
  const cardContainer = document.querySelector(".card-container");
  arr.forEach((book) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", `${book.title}`);
    card.textContent = `${book.info()}`;
    cardContainer.appendChild(card);
  });

  // console.log(book.info())
}



/*
Create books and display
*/
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const gatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 350, true);
const catch22 = new Book("Catch-22", "Joseph Heller", 400, true);
const theStranger = new Book("The Stranger", "Albert Camus", 250, true);
const hamlet = new Book("Hamlet", "William Shakespeare", 150, true);

addBookToLibrary(theHobbit, myLibrary);
addBookToLibrary(gatsby, myLibrary);
addBookToLibrary(catch22, myLibrary);
addBookToLibrary(theStranger, myLibrary);
addBookToLibrary(hamlet, myLibrary);

displayBooks(myLibrary);
