const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public")); // for displaying image
app.engine('ejs', ejsMate);

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/aboutMe', (req, res) => {
    res.render('aboutMe');
})

app.get('/education', (req, res) => {
    res.render('education');
})

app.get('/projects', (req, res) => {
    res.render('projects');
})

app.get('/contactMe', (req, res) => {
    res.render('contactMe');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})