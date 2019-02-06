const path = require ('path');
const express = require('express');
const app = express();
const port = 3000

//Specifing folder for css and stuff
app.use(express.static(__dirname + '/public'));

//Rerouting
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/index.html')));

app.get('/about', (req, res) => res.sendFile(path.join(__dirname + '/views/about.html')));

app.get('/memes',(req, res) => res.sendFile(path.join(__dirname + '/views/memes.html')));

app.listen(port, () => console.log(`Listening on port ${port}!`));
