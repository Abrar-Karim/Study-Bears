const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    email:{
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    profilePicture:{
        type: String,
        default: ""
    },
    followers:{
        type: Array,
        default: []
    },
    followings:{
        type: Array,
        default: []
    },
    courses:{
        type: Array,
        default: [],
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    zoom: {
        type: Boolean,
        default: false
    },
    campus: {
        type: Boolean,
        default: false
    },
    weekday: {
        type: Boolean,
        default: false
    },
    weekends: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema);