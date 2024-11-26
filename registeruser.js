const axios = require('axios');

async function registerUser(username, email, password) {
  try {
    const response = await axios.post('https://example.com/api/register', {
      username: username,
      email: email,
      password: password,
    });

    
    console.log('User registration successful:', response.data);
  } catch (error) {
    
    console.error('Error registering user:', error);
  }
}

const username = 'john_doi';  // 
const email = 'john@example.com';
const password = 'securepassword'; 
registerUser(username, email, password);
