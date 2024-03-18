const express = require('express')
const Workout = require('../models/workoutModel.js')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single workout'})
})

// POST a new workout
router.post('/', async (req, res) => {
  const {title, load, reps} = req.body;

  try {
    const workout = await Workout.create({title, load, reps})
  } catch (error) {

  }

  res.json({mssg: 'POST a new workout'})
})


// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'})
})

module.exports = router