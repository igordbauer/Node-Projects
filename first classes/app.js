const http = require('http')
const express = require('express')

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware')
    next();// continue to the next middleware
});
app.use((req, res, next) => {
    console.log('another middleware')
    res.send('<h1>hello</h1>')
});

const server = http.createServer(app)

server.listen(3000)