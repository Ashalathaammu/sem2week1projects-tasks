const express = require('express');
const app = express();
const products = require('./products'); // Products data and handlers
const port = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// GET all products
app.get('/products', (req, res) => {
    res.json(products.getAllProducts());
});

// GET a single product by ID
app.get('/products/:id', (req, res) => {
    const product = products.getProductById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// POST to create a new product
app.post('/products', (req, res) => {
    const newProduct = products.createProduct(req.body);
    res.status(201).json(newProduct);
});

// PUT to update a product by ID
app.put('/products/:id', (req, res) => {
    const updatedProduct = products.updateProduct(req.params.id, req.body);
    if (updatedProduct) {
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// DELETE a product by ID
app.delete('/products/:id', (req, res) => {
    const success = products.deleteProduct(req.params.id);
    if (success) {
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Inventory API is running on http://localhost:${port}`);
});
