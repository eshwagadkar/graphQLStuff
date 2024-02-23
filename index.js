const express = require('express')
const connectDB = require('./mongoConnect')

require('dotenv').config()

const PORT = process.env.PORT

connectDB()

const app = express()




app.listen(PORT, () => {
    console.log(`The express server is up and running on port: ${PORT}`)
})