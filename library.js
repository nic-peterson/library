// Initiatlize variables
let myLibrary = [];
const modal = document.querySelector(".modal");
const form = document.querySelector("#submit-book");
const closeBtn = document.querySelector(".close-btn");
const addBookBtn = document.getElementById("add-book-btn");
const cardContainer = document.querySelector(".card-container");

/*
Create a book object and define the functions to add, remove, and display books to the library.
*/
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    !this.read ? "not read yet" : "have read!"
  }`;
};

Book.prototype.toggleRead = function () {
  return (this.read = !this.read);
};

// Library functions
function addBookToLibrary(book, arr) {
  arr.push(book);
  return arr;
}

function removeBookfromLibrary(index, arr) {
  return arr.splice(index, 1);
}

// Display library functions

function displayBooks(arr) {
  let i = 0;
  arr.forEach((book) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", `${book.title}`);
    card.setAttribute("idx", `${i}`);
    card.textContent = `${book.info()}`;

    const cardCloseBtn = document.createElement("span");
    cardCloseBtn.setAttribute("id", `${i}`);
    cardCloseBtn.className = "close-btn remove-book";
    cardCloseBtn.innerHTML = "&times;";
    cardCloseBtn.style.padding = "5px";
    cardCloseBtn.addEventListener("click", removeBookCallback, false);
    card.appendChild(cardCloseBtn);

    const readBtn = document.createElement("button");
    readBtn.setAttribute("id", `${i}`);
    readBtn.className = "read-status";
    readBtn.textContent = "Toggle Read";
    readBtn.addEventListener("click", changeReadStatus, false);
    card.appendChild(readBtn);

    cardContainer.appendChild(card);

    i++;
  });
}

const changeReadStatus = function () {
  const idx = this.getAttribute("id");
  myLibrary[idx].toggleRead();
  refreshView();
};
const removeBookCallback = function () {
  const id = this.getAttribute("id");
  removeBookfromLibrary(id, myLibrary);
  refreshView();
};

const refreshView = function () {
  clearBooks(cardContainer);
  displayBooks(myLibrary);
};

function clearBooks(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// NEW Book button logic. Submit button and toggling the modal that has the book details in the form.
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newBook = new Book(
    form.elements["book-title"].value,
    form.elements["book-author"].value,
    form.elements["book-pages"].value,
    form.elements["book-read"].checked ? true : false
  );
  addBookToLibrary(newBook, myLibrary);
  refreshView();
});

form.addEventListener;

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

addBookBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

/*
Create books and display
*/
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const gatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 350, true);
const catch22 = new Book("Catch-22", "Joseph Heller", 400, true);
const theStranger = new Book("The Stranger", "Albert Camus", 250, true);
const hamlet = new Book("Hamlet", "William Shakespeare", 150, true);

// Add books to the library
addBookToLibrary(theHobbit, myLibrary);
addBookToLibrary(gatsby, myLibrary);
addBookToLibrary(catch22, myLibrary);
addBookToLibrary(theStranger, myLibrary);
addBookToLibrary(hamlet, myLibrary);

// Display the library
displayBooks(myLibrary);
