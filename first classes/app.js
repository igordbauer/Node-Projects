
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const notFound = require('./routes/404')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes)
app.use(shopRoutes)
app.use(notFound)
app.listen(3000)