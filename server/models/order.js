const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'No order name'
    },
    note: {
        type: String,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    closedAt: {
        type: Date,
    },
    status: {
        type: String,
        required: true,
        default: 'open'
    },
    totalPrice: {
        type: Number,
        required: true
    },
    productList: [{
        type : Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

module.exports = mongoose.model('Order', orderSchema)