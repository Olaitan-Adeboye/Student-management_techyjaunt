const express = require('express');
const app = express();
const PORT = 3000;

// I'm importing my database from another file
const connectDB = require('./database'); //calling the database.js file
connectDB(); // Call it to establish MongoDB connection

const { Student } = require('./student.schema'); //to import the student schema directly

const studentRoute = require('./students.route'); //linking the student.route.js file to it

const mongoose = require('mongoose');

app.use(express.json());


app.use('/api/students', studentRoute); //to call 


// Default route
app.get('/', (req, res) => {
    res.send('Ola rocks!');
});


// Listen to port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
