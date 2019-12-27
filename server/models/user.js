const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    email: {
        type: String,
        required: true
    },
    order: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Order'
    },
    address: {
        address1: String,
        address2: String,
        city: String,
        country: String,
        zip: String,
        phone: String
    }
});

module.exports = mongoose.model('User', userSchema)