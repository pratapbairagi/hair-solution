const mongoose = require("mongoose")

const clientSchema = mongoose.Schema({
    name : {
        type : String,
        require : [true, "Name Field required !"],
        index : true
    },
    age : {
        type : Number,
        require : [true, "Age Field required !"]
    },
    number : {
        type : Number,
        require : [true, "Number Field required !"],
        index : true
    },
    email : {
        type : String,
        require : [true, "Email Field required !"]
    },
    gender : {
        type : String,
        require : [true, "Gender Field required !"]
    },
    totalPurchase : {
        type : Number,
        default : 0
    },
    totalService : {
        type : Number,
        default : 0
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
        mailSent : {
            type : Number,
            default : 0
        },
        review : {
            type : Boolean,
            default : false
        },
        other : [String],
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
        mailSent : {
            type : Number,
            default : 0
        },
        review : {
            type : Boolean,
            default : false
        },
        other : [String],
        serviceDate:{
            type : Date,
            default : Date.now
        }
    }],
    createdAt : {
        type : Date,
        default : Date.now
    }

});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;