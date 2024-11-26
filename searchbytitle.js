const axios = require('axios');

// Function to search books by title
async function searchByTitle(title) {
  try {
    const response = await axios.get(`https://example.com/api/books?title=${title}`);
    console.log('Books with title:', response.data);
  } catch (error) {
    console.error('Error fetching books by title:', error);
  }
}

// Example usage: Search for books by title
const title = 'Harry Potter';  // Replace with the actual title
searchByTitle(title);
