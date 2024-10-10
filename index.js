// Function to fetch books from the Game of Thrones API
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Convert the response to JSON
    .then((books) => renderBooks(books)); // Pass the JSON to renderBooks()
}

// Function to render books on the webpage
function renderBooks(books) {
  const main = document.querySelector('main'); // Get the main element

  // Iterate over each book and create an element to display the title
  books.forEach((book) => {
    const h2 = document.createElement('h2'); // Create an h2 element
    h2.textContent = book.name; // Set the text content to the book's name
    main.appendChild(h2); // Append the h2 to the main element
  });
}

// Call fetchBooks when the page loads
document.addEventListener('DOMContentLoaded', fetchBooks);
