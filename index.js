const express = require('express');
const app = express();

// Define the GET route at /hello
app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server on a specific port (e.g., 3000)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get('/goodbye', (req, res) => {
    res.send('Goodbye, Express!');
});
const PORT1 = 4000;
app.listen(PORT1, () => {
  console.log(`Server is running on port ${PORT1}`);
});
app.post('/echo', (req, res) => {
    const requestData = req.body; // Access the JSON data from the request body
    res.json(requestData); // Echo back the data as JSON
});
const PORT2 = 5000;
app.listen(PORT2, () => {
        console.log(`Server is running on port ${PORT2}`);
 });
 app.get('/greet', (req, res) => {
    const name = req.query.name; // Access the query parameter 'name'
    
    // Respond with the greeting message
    if (name) {
      res.send(`Hello, ${name}!`);
    } else {
      res.send('Hello, Guest!');
    }
  });
  
  // Start the server on a specific port (e.g., 3000)
const PORT3 = 6000;
app.listen(PORT3, () => {
    console.log(`Server is running on port ${PORT3}`);
});
app.get('/greet/:name', (req, res) => {
    const name = req.params.name; // Get the name from the URL
    res.send(`Hello, ${name}!`);   // Send the greeting as the response
});

// Start the server
PORT4=7000;
app.listen(PORT4, () => {
    console.log(`Server is running on http://localhost:${PORT4}`);
});
const PORT5 = process.env.PORT || 8000;

// Create a GET route that accepts a user ID as a URL parameter
app.get('/user/:id', (req, res) => {
    const id = req.params.id; // Get the ID from the URL
    res.send(`User ID: ${id}`); // Send the user ID as the response
});

// Start the server
app.listen(PORT5, () => {
    console.log(`Server is running on http://localhost:${PORT5}`);
});
  
