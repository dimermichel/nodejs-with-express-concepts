const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></button></form>')
    // next(); // Allows request to continue to the next middleware in line if you want
});

router.post('/product', (req, res, next) => {
    console.log('Inside another middleware.');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;