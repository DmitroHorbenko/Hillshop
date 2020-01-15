const mongoose = require('mongoose')

mongoose.set('debug', true)

mongoose.connect('mongodb://localhost/hillshop', {useUnifiedTopology: true, useNewUrlParser: true});

module.exports = mongoose