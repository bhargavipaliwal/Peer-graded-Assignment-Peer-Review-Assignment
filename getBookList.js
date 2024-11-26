// Import axios to make HTTP requests
const axios = require('axios');

// Function to fetch the list of books available in the shop
async function getBookList() {
  try {
    // Replace with the actual API endpoint that provides the book list
    const response = await axios.get('https://example.com/api/books');
    
    // Log the list of books available in the shop
    console.log('Books available in the shop:');
    console.log(response.data); // Assuming the response is a JSON array of books
  } catch (error) {
    // Handle error in case of failure
    console.error('Error fetching the book list:', error);
  }
}

// Call the function to get the book list
getBookList();
