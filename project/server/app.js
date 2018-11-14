const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.json()); 
app.use(express.static('public'));

const { memberRouter } = require('./controller/member.controller');
const { projectRouter } = require('./controller/project.controller');

app.use('/member', memberRouter);
app.use('/project', projectRouter);

module.exports = app;