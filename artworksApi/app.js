const express = require('express')
const app = express()
const sequelize = require('sequelize')
const bodyParser = require('body-parser')
const paginate = require('express-paginate');
const db = require('./queries')
const port = 3000


app.use(bodyParser.json())

app.use(
 bodyParser.urlencoded({
   extended: true,
 })
)

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/artworks', db.getArtWorks)

app.use(function (req, res, next) {
 res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
 console.error(err.stack)
 res.status(500).send('Something broke!')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))