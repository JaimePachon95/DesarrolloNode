const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const db = require('./db');

var app = express();

app.use(bodyParser.json());

//routes
router(app);

//Starting the server
app.listen(3000);
console.log('La aplicacion está escuchando en http://localhost:3000');