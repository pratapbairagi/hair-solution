
const mongoose = require('mongoose');

const ReviewSchema =  mongoose.Schema({
    clientId: { 
        type: String
    },
    name : {
        type : String
    },
    entityId:{
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