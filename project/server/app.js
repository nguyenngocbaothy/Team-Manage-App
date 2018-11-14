const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.json()); 
app.use(express.static('public'));


module.exports = app;