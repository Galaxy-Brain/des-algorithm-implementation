const express = require('express')
const app =  express()
const dotenv = require('dotenv')
const routes = require('./routes/web')
const history = require('connect-history-api-fallback')
const bodyParser = require('body-parser')

app.use(history())
app.use(bodyParser.json())
dotenv.config('./.env')

const {PORT} = process.env

app.use(routes)

app.use(express.static(__dirname+'/public'))


app.listen(PORT, ()=>{
    console.log(`App is  running on http://127.0.0.1:${PORT} `)
})