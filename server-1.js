require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

//const mongoose = require('mongoose')
require('./mongooseConnect')()
app.listen(PORT, ()=>{console.log('running w/ devil')})

