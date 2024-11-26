
const axios = require('axios');


async function getBooksByAuthor(authorName) {
  try {
    
    const response = await axios.get(`https://example.com/api/books?author=${encodeURIComponent(authorName)}`);
    
    
    if (response.data.length > 0) {
      console.log(`Books by ${authorName}:`);
      console.log(response.data);
    } else {
      console.log(`No books found by author: ${authorName}`);
    }
  } catch (error) {
    
    console.error('Error fetching books by author:', error);
  }
}


const authorName = 'George Orweell'; 
getBooksByAuthor(authorName);
