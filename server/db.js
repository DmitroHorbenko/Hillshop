const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/hillshop", { useNewUrlParser: true })
mongoose.set('debug', true)

module.exports = mongoose