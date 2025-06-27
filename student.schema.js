const mongoose = require ('mongoose');




// Define Schema
const studentSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true}, //This will make it a required field
    lastName: {
        type: String,
        required: true},
    age: {
        type: Number,
        required: false},
    course: {
        type: String,
        required: true},
    level: {
        type: Number,
        enum: [100, 200, 300, 400, 500],
        required: true},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true}
});

//(If date is added, use: 'default: date.now' to set to current date)

// Define Model
const Student = mongoose.model('Student', studentSchema);



module.exports = {Student}; //to export the student schema into my main.js