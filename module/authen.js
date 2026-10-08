const mongoose = require('mongoose');

const authenSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
        unique : true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique : true,
        lowercase: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
})

module.exports = mongoose.model('authen', authenSchema);