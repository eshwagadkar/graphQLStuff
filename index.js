const express = require('express')
const { createHandler } = require('graphql-http/lib/use/express')
const schema = require('./server/schema/schema')

const connectDB = require('./mongoConnect')

require('dotenv').config()
const PORT = process.env.PORT


connectDB()

const app = express()

app.all('/graphql', createHandler({ schema }));


app.listen(PORT, () => {
    console.log(`The express server is up and running on port: ${PORT}`)
})