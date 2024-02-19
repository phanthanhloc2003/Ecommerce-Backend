const mongoose = require("mongoose");
const URL = "mongodb+srv://lopphanskt92:Ptl2003.@cluster-mongo-test.wdhvwcn.mongodb.net/"

async function connect() {
    try {
        await mongoose.connect( URL);

        console.log("Connected to the database successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
}

module.exports = { connect };
