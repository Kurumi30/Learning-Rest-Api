require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const subscribersRouter = require('./routes/subscribers')

const app = express()
const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database!"))

app.use(express.json())
app.use('/subscribers', subscribersRouter)
app.listen(3000, () => console.log("Server running on http://localhost:3000"))