const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Successfully connected to MongoDB database.')
    } catch (err) {
        console.log(`Error connecting to the database: ${err.message}`)
    }
}

module.exports = connectDB