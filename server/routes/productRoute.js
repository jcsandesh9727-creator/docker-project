const express = require('express');
const router = express.Router();
const authMiddleware = require('../middelware/authMiddleware');

// Wishlist route that creates and sends two products as response
router.get('/wishlist', authMiddleware, (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Sample Product 1',
            price: 29.99,
            description: 'This is a sample product for the wishlist.'
        },
        {
            id: 2,
            name: 'Sample Product 2',
            price: 49.99,
            description: 'Another sample product for the wishlist.'
        }
    ];
    res.status(200).json(products);
});

module.exports = router;
