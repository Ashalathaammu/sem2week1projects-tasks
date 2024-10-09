
// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port
const PORT = process.env.PORT || 1000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to handle incoming JSON data
app.post('/data', (req, res) => {
    const incomingData = req.body; // Access the incoming JSON data
    console.log('Received data:', incomingData); // Log the data for verification
    res.json({ message: "Data received", data: incomingData }); // Respond with a confirmation
});
