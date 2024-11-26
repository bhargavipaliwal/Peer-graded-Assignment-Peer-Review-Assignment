const axios = require('axios');

// Function to login a registered user
async function loginUser(email, password) {
  try {
    const response = await axios.post('https://example.com/api/login', {
      email: email,
      password: password,
    });

    // Log the successful login response (usually a token)
    console.log('Login successful. Token:', response.data.token);
  } catch (error) {
    // Handle error during login
    console.error('Error logging in:', error);
  }
}

// Example: Call the function with user credentials
const email = 'john@example.com';  // Replace with email
const password = 'securepassword';  // Replace with password
loginUser(email, password);
