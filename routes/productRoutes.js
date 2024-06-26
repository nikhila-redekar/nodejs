// routes/productRoutes.js

const express = require('express');
const router = express.Router();

// Dummy data store for demonstration
let products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
];

// GET all products
router.get('/', (req, res) => {
    res.send('Retrieving all products');
});

// POST add a new product
router.post('/', (req, res) => {
    // For simplicity, assume req.body contains new product data
    const newProduct = { id: products.length + 1, name: 'New Product' };
    products.push(newProduct);
    res.send('Adding a new product');
});

// PUT update an existing product
router.put('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    // For simplicity, assume req.body contains updated product data
    const updatedProduct = { id: productId, name: 'Updated Product' };
    // Update product in the array
    products = products.map(product => (product.id === productId ? updatedProduct : product));
    res.send(`Updating product ${productId}`);
});

// DELETE remove an existing product
router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    // Filter out the product to delete
    products = products.filter(product => product.id !== productId);
    res.send(`Deleting product ${productId}`);
});

module.exports = router;
