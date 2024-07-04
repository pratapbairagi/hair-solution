const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
    title : {
        type : String
    },
    Details : {
        type : String
    },
    image : {
        url : {
            type : String
        },
        public_id : {
            type : String
        }
    },
    branch : {
        type : String
    },
    social : [
        {
            link : {
                type : String
            },
            name : {
                type : String
            }
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now()
    }
});

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;