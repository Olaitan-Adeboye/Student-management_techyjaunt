//Connecting to my Student database in MongoDB
const mongoose = require ('mongoose');

// Database connection
const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/Student', {
        
    }).then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.error('MongoDB connection error:', err));
};


module.exports = connectDB