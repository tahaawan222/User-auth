// NEW: Load environment variables from the .env file
require('dotenv').config();

const mongoose = require("mongoose");
// MODIFIED: Use the environment variable DATABASE_URL
const connect = mongoose.connect(process.env.DATABASE_URL); 


connect.then(() => {
    console.log("Database connected Successfully");
})

.catch(() => {
    // Note: Logging the error is helpful here
    console.error("Database cannot be connected:", error); 
    console.log("Database cannot be connected");
});


const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const collection = new mongoose.model("users", LoginSchema);
module.exports = collection;