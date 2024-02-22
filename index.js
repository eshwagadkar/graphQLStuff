const express = require('express')
const { createHandler } = require('graphql-http/lib/use/express')

require('dotenv').config()
const PORT = process.env.PORT

const app = express()

const schema = require('./schema/schema')

app.all('/graphql', createHandler({ schema }));

app.listen(PORT, () => {
    console.log(`The server is up and running on port: ${PORT} `)
})