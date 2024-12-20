const { default: mongoose } = require("mongoose");
require("dotenv").config();

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Connect To The Database !!");
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = dbconnect;