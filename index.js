const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const category = require('./data/chetagory.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.listen(port, () => {
})