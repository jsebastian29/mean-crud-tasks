const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { mongoose } = require('./database')
const cors = require('cors')

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(cors({origin: 'http://localhost:4200'})) // Enable CORS
app.use(morgan('dev')) // Morgan is used for getting the requests messages in console
app.use(express.json()) // Parse all the requests to JSON format

// Routes
app.use('/api/tasks', require('./routes/task.routes')) // Use the routes file

// Static Files
app.use(express.static(path.join(__dirname, 'public'))) // Set the Public folder for static files

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`App listening at http://localhost:${app.get('port')}`)
})