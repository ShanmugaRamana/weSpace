const express = require('express');
const path = require('path')

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));

//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'login.html'));
});
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'signup.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  