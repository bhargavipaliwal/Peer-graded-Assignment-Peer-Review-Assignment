// Import axios to make HTTP requests
const axios = require('axios');

// Function to fetch a book by ISBN
async function getBookByISBN(isbn) {
  try {
    // Replace with the actual API endpoint for getting a book by ISBN
    const response = await axios.get(`https://example.com/api/books/${isbn}`);
    
    // Log the book details
    console.log('Book Details:', response.data);
  } catch (error) {
    // Handle error in case of failure
    console.error('Error fetching the book by ISBN:', error);
  }
}

// Example: Call the function with a specific ISBN
const isbn = '978-3-16-148410-0'; // Replace with an actual ISBN
getBookByISBN(isbn);
