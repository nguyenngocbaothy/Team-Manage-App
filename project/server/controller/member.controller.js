const express = require('express');
const memberRouter = express.Router();
const parser = require('body-parser').json();

const Member = require('../model/member.model.js');

memberRouter.post('/', parser, (req, res) => {
    const { name, phone } = req.body;
    Member.createMember(name, phone)
    .then(member => res.send({ success: true, member }))
    .catch(error => res.send({ success: false, message: error.message}));
});

module.exports = { memberRouter };