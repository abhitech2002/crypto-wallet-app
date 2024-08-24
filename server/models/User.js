const mongoose = require('mongoose')

const userSchema = new mongoose.Schema( {
    address : {
        type: String,
        required: true,
        unique: true
    },
    balance : {
        type: String,
        required: true,
    },
    network: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema);
