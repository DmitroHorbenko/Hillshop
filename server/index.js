const express = require('express')
const bodyParser = require('body-parser')
const app = express
const port = 3002
const db = require('./db')
const routes = require('./routes')
const cors = require('cors')
const hellmet = require('helmet')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.use(hellmet())

app.use(cors())

app.use(routes)

app.use((err, req, res, next) => {
    if(!err.code){
        res.status(500)
    } else {
        res.status(err.code)
    }
    res.json({error: 'Ops! Smth happened'})
})

db.connection.once('open', function() {
    app.listen(port, ()=> console.log(`Server running at http://${port}/`))
});