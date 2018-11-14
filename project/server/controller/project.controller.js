const express = require('express');
const projectRouter = express.Router();
const parser = require('body-parser').json();

const Project = require('../model/project.model');

projectRouter.post('/', parser, (req, res) => {
    Project.createProject(req.body.name)
    .then(project => res.send({ success: true, project }))
    .catch(error => res.send({ success: false, message: error.message}));
});

projectRouter.get('/', parser, (req, res) => {
    Project.showProjectDetail()
    .then(projects => res.send({ success: true, projects }))
    .catch(error => res.send({ success: false, message: error.message}));
});

projectRouter.post('/addmember', parser, (req, res) => {
    Project.assignMember(req.body.projectId, req.body.memberId)
    .then(project => res.send({ success: true, project }))
    .catch(error => res.send({ success: false, message: error.message}));
});

module.exports = { projectRouter };