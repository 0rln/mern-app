require('dotenv').config()
//To make all the env variable available, which will make the port number versatile
//need to install env by typing in terminal: npm install dotenv and create a .env file and attatch the port number in that document

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
//importing the workout routes from the workout.js file

// express app
const app = express()


// middleware
// middleware is any piece of code that works between the site recieving a request and the site responding to the request

app.use(express.json())
//Any request that comes in, it looks whether it has any body to the request and if it does, it will attach it to the request object
// in the form of a json file

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
//This middleware will log the path and method of the request to the console

// routes
app.use('/api/workouts', workoutRoutes) 
//When it goes to the main website, it will look at request and respond with the json msg "welcome to the app"

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
