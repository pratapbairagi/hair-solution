
const mongoose = require("mongoose");
const url="mongodb+srv://hair-fixing:18May1994@cluster0.5qgqh.mongodb.net/hair-fixing?retryWrites=true&w=majority&appName=Cluster0"
exports.dbConnection = async () => {
    try {
        mongoose.set({strictQuery : true});
         mongoose.connect(url, {
            serverSelectionTimeoutMS: 5000

        }).then((res) => {
            console.log("db connected")
        }).catch((er) => {
            console.log("Failed to connect to database", er)
            throw new Error(er);
        })
    } catch (error) {
        console.log("db connection error ", error)
        throw new Error(error);

    }
}