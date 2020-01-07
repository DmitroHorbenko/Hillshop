const mongoose = require('mongoose')

mongoose.set('debug', true)

mongoose.connect("mongodb://localhost/hillshop"})
// mongoose.connect("mongodb://localhost/hillshop", { useNewUrlParser: true })

module.exports = mongoose