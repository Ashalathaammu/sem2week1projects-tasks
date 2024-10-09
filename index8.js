// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port
const PORT = process.env.PORT || 1000;

// Create a GET route that responds with a JSON object
app.get('/greet', (req, res) => {
    res.json({ message: "Hello, world!" }); // Respond with a JSON object
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
