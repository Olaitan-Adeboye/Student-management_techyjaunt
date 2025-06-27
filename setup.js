// setup.js

const mongoose = require('mongoose');
const connectDB = require('./database'); // my database connection file
const { Student } = require('./student.schema'); // my student schema

async function setup() {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('Connected to MongoDB');

    // Ensure indexes are created (especially email uniqueness)
    await Student.init();
    console.log('Indexes created successfully');

    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed. Setup complete.');

    process.exit(0); // Exit with success
  } catch (error) {
    console.error('Setup failed:', error);
    process.exit(1); // Exit with error
  }
}

setup();
