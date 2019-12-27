const Order = require('../models/order')

const getAll = () => Order.find({})
const create = (order) => Order.create(order)
const findById = (id) => Order.findById(id)
const update = ({_id, ...rest}) => Order.update({_id}, rest)
const deleteById = (id) => Order.deleteById(id)

module.exports = {
    getAll,
    create,
    findById,
    update,
    deleteById
}