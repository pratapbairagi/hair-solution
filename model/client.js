const mongoose = require("mongoose")

const clientSchema = mongoose.Schema({
    name : {
        type : String,
        require : [true, "Name Field required !"]
    },
    age : {
        type : String,
        require : [true, "Age Field required !"]
    },
    number : {
        type : Number,
        require : [true, "Number Field required !"]
    },
    email : {
        type : String,
        require : [true, "Email Field required !"]
    },
    gender : {
        type : String,
        require : [true, "Gender Field required !"]
    },
    productsPurchased: [{
        productId:{
            type : String
        },
        productName: {
            type : String
        },
        amount : {
            type : Number
        },
        purchaseDate:{
            type : Date,
            default : Date.now
        }
    }],
    servicesTaken: [{
        serviceId:{
            type : String
        },
        serviceName:{
            type : String
        },
        amount : {
            type : Number
        },
        serviceDate:{
            type : Date,
            default : Date.now
        }
    }]

});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;