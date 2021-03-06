const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.json()); 

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('public'));


const { memberRouter } = require('./controller/member.controller');
const { projectRouter } = require('./controller/project.controller');

app.use('/member', memberRouter);
app.use('/project', projectRouter);

module.exports = app;