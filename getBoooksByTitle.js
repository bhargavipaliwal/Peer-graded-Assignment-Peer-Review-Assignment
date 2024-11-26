
const axios = require('axios');


async function getBooksByTitle(title) {
  try {
  
    const response = await axios.get(`https://example.com/api/books?title=${encodeURIComponent(title)}`);
    

    if (response.data.length > 0) {
      console.log(`Books matching the title "${title}":`);
      console.log(response.data);
    } else {
      console.log(`No books found with the title: "${title}"`);
    }
  } catch (error) {
    
    console.error('Error fetching books by title:', error);
  }
}


const title = '1984';  
getBooksByTitle(title);
