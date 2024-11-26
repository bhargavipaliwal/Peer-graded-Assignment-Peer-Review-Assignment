const axios = require('axios');


async function getAllBooks(callback) {
  try {
    const response = await axios.get('https://example.com/api/books');
    callback(null, response.data); // Passing the data to callback
  } catch (error) {
    callback(error, null); // Handling error in callback
  }
}


function handleBooks(error, books) {
  if (error) {
    console.error('Error fetching books:', error);
  } else {
    console.log('List of books:', books);
  }
}

getAllBooks(handleBooks);
