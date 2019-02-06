const path = require ('path');
const express = require('express');
const app = express();
const port = 3000

//Specifing folder for css and stuff
//Iamge and Css files
app.use(express.static(__dirname + '/public/'));

app.use(express.static(__dirname + '/views/'));

//Rerouting
app.get('/', (req, res) => res.sendFile(path.join(__dirname + 'index.html')));

app.get('/memes', (req, res) => res.sendFile(path.join(__dirname + 'memes.html')));

app.get('/about', (req, res) => res.sendFile(path.join(__dirname + 'about.html')));

app.listen(port, () => console.log(`Listening on port ${port}!`));
