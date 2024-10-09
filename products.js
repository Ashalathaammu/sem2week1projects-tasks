let products = [
    { id: '1', name: 'Laptop', price: 1200, quantity: 50 },
    { id: '2', name: 'Mouse', price: 25, quantity: 200 },
    { id: '3', name: 'Keyboard', price: 45, quantity: 150 }
];

// Get all products
function getAllProducts() {
    return products;
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Create a new product
function createProduct(productData) {
    const newProduct = {
        id: (products.length + 1).toString(),
        ...productData
    };
    products.push(newProduct);
    return newProduct;
}

// Update a product by ID
function updateProduct(id, updatedData) {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        products[productIndex] = { ...products[productIndex], ...updatedData };
        return products[productIndex];
    }
    return null;
}

// Delete a product by ID
function deleteProduct(id) {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        return true;
    }
    return false;
}

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
