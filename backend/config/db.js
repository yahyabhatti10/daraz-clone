const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

async function connectDB() {
  try {
    console.log(MONGO_URI)
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connected successfully')
  } catch (err) {
    console.error('MongoDB connection failed', err)
    process.exit(1)
  }
}

module.exports = connectDB
