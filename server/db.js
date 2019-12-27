const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb://localhost/testNode');
mongoose.set('debug', true);

module.exports = mongoose