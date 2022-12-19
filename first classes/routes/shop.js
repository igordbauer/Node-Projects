const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const adminData = require('./admin')

const router = express.Router();


router.get('/', (req, res, next) => {
    const products = adminData.products
    res.render('shop', { pageTitle:'Shop',prods: products, docTitle:'shop', path:'/' })
});
//     console.log(adminData.products)
//     res.sendFile(path.join(rootDir, 'views', 'shop.html'))
// });

module.exports = router