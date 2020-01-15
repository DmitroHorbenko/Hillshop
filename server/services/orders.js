const Order = require('../models/order')

const getAll = () => Order.find().populate('productList')
const create = (order) => Order.create(order)
const findById = (id) => Order.findById(id).populate('productList')
const update = ({ _id, ...rest }) => Order.update({ _id }, rest)
const deleteById = (id) => Order.deleteById(id)

module.exports = {
    getAll,
    create,
    findById,
    update,
    deleteById
}