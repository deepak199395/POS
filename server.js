const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const colors = require('colors') // Import colors package

const app = express()
const connectDB=require("./Config/Config.js")
// Load environment variables
dotenv.config()
//db congig
connectDB()
// Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
    res.send('POS Server is running')
})

// Uncomment this when you add API routes
// app.use('/api', require('./routes'))

// Server Port
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.cyan.bold)
})
