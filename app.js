const express = require('express');
const data = require('./data.json').projects;

const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));
app.use('/static', express.static('images'));

app.get('/', (req, res) => {
    res.render('index', { data });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log("We're up and running on localhost:3000!");
});
