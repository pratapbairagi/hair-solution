const mongoose = require("mongoose");

const product = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title field is dd !"]
    },
    image: {
        url: {
            type: String
        },
        public_id: {
            type: String
        }
    },
    description: {
        type: String,
        required: [true, "Details is required !"]
    },
    gender: {
        type: [Object]
    },
    type_: {
        type: String,
        required: [true, "Product type field is required !"]
    },
    types : {
        type : [Object]
    },
    sizes : {
        type : [Object]
    },
    colors : {
        type : [Object]
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    branch : {
        type : [Object]
    }
});


const Product = mongoose.model("Product", product);

module.exports = Product