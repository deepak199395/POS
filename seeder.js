const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./Config/Config");
const ItemModel = require("./MVC/Models/itemmodel");
const items = require("./Utils/Data.js");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const importData = async () => {
    try {
        await ItemModel.deleteMany(); 
        const insertedData = await ItemModel.insertMany(items);
        console.log("✅ All items added successfully!", insertedData);
        process.exit(0); 
    } catch (error) {
        console.error(`❌ Error inserting data: ${error.message}`, error.errors);
        process.exit(1); 
    }
};

// Run the seeder
importData();
