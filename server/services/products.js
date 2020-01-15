const Product = require('../models/product')

const getAll = () => Product.find().populate('category')
const create = (product) => Product.create(product)
const findById = (id) => Product.findById(id).populate('category')
const update = ({ _id, ...rest }) => Product.update({ _id }, rest)
const deleteById = (id) => Product.deleteById(id)

module.exports = {
    getAll,
    create,
    findById,
    update,
    deleteById
}