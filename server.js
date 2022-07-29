require('dotenv').config()

// Importing and Initializing modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connecting to Mongoose and MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Database Connected'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers.js')
app.use('/subscribers', subscribersRouter)

// Running server
app.listen(3000, () => console.log('Server started on port 3000'));

