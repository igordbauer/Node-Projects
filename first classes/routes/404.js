const express = require('express')
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path')

router.use((req, res, next) => {
    res.status(404).render('404',{
        pageTitle:'Page not found'
    })
})

module.exports = router