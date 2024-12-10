const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Hardcoded MongoDB URI
    const mongoURI = "mongodb+srv://malikshery09:malikshari098765@cluster0.svswbhp.mongodb.net/Grocery?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your actual URI
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected Successfully...!: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
