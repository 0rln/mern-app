require('dotenv').config()
//To make all the env variable available, which will make the port number versatile
//need to install env by typing in terminal: npm install dotenv and create a .env file and attatch the port number in that document

const express = require('express')
const workoutRoutes = require('./routes/workouts')
//importing the workout routes from the workout.js file

// express app
const app = express()

// middleware
// middleware is any piece of code that works between the site recieving a request and the site responding to the request
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
//This middleware will log the path and method of the request to the console

// routes
app.use('/api/workouts', workoutRoutes) 
//When it goes to the main website, it will look at request and respond with the json msg "welcome to the app"

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})