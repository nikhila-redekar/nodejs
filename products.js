// app.js

const express = require('express');
const app = express();
const PORT = 3013;

// Import the product routes
const productRoutes = require('./routes/productRoutes');

// Use the product routes for the '/products' path
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
