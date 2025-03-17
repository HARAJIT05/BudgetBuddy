const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kazuha31:kazuha31@cluster0.ht9ceff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
