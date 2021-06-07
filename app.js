const express = require('express');
const data = require('./data.json');
//const views = require('./views');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log("We're up and running on localhost:3000!");
});