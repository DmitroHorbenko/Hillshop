const Category = require('../models/category')

const getAll = () => Category.find()
const create = (category) => Category.create(category)
const findById = (id) => Category.findById(id)
const update = ({ _id, ...rest }) => Category.update({ _id }, rest)
const deleteById = (id) => Category.deleteById(id)

module.exports = {
    getAll,
    create,
    findById,
    update,
    deleteById
}