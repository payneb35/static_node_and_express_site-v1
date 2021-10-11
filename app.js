//These first few lines are required for setting up the page with express, data, and pug

const express = require('express');
const data = require('./data.json').projects;

const app = express();

app.set('view engine', 'pug');

//These are where to find styles and images used in the page
app.use('/static', express.static('public'));
app.use('/static', express.static('images'));

//This is the homepage
app.get('/', (req, res) => {
    res.render('index', { data });
});

//This is an about page
app.get('/about', (req, res) => {
    res.render('about');
});


//This next section creates a unique page for each project
app.get('/project/:0', (req, res) => {
    res.render('project', { data : data[0] })
});

app.get('/project/:1', (req, res) => {
    res.render('project', { data : data[1] })
});

app.get('/project/:2', (req, res) => {
    res.render('project', { data : data[2] })
});

app.get('/project/:3', (req, res) => {
    res.render('project', { data : data[3] })
});

app.get('/project/:4', (req, res) => {
    res.render('project', { data : data[4] })
});


//This is used to initiate a 404 error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//This is where errors are handled
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

//This lets us run on port 3000 and gives a confirmation to the console.
app.listen(3000, () => {
    console.log("We're up and running on localhost:3000!");
});
