
const mongoose = require('mongoose');

const ReviewSchema =  mongoose.Schema({
    clientId: { 
        type: String, 
        index : true
    },
    clientName : {
        type : String,
        index : true
    },
    entityId:{
        type : String,
        index : true
    },
    entityName:{
        type : String,
        index : true
    },
    entityImage : {
        type : String
    },
    entityType: {
        type : String,
        enum : ["product", "service"]
    },
    rating:{
        type : Number
    },
    reviewText:{
        type : String
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review