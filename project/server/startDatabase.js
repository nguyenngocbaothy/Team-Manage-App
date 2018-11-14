const mongoose = require('mongoose');

function getDatabaseUri() {
    return 'mongodb://localhost/team-manage';
}

mongoose.connect(getDatabaseUri(), { useNewUrlParser: true });