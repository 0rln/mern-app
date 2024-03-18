const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// A Schema is an object that defines the basic blueprint of your data in the database, such as type of each data, required etc

const workoutSchema = new Schema({
    title: {
        type: toString,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)
// 
