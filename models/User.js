
// Create a Schema for User
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name : {
        type: String,
        requried: true
    },

    email : {
        type: String,
        requried: true
    },

    password : {
        type: String,
        requried: true
    },

    date : {
        type: Date,
        default: Date.now
    }

});

module.exports = User = mongoose.model("users", UserSchema);