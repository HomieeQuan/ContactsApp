const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const connectDb = require('./config/connectDb')
const errorHandler = require('./middleware/errorHandler')
const contactRoutes = require('./routes/contactRoutes')
const userRoutes = require('./routes/userRoutes')

connectDb()

// Build user model and update contact model (done)
// update .env with SECRET variable (done)
// build user controller and update contact controller  (done)
// build user routes (done)
// build validateTokenHandler (done)
// add validatieTokenHandler to user and contact routes (done)
// Test APIs

app.use(express.json())
app.use('/api/contacts',contactRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)
app.listen(port, console.log(`Port is running on:${port}`))