const User = require('../models/user')

const getAll = (user) => User.find({})
const create = (user) => User.create(user)
const findById = (id) => User.findById(id)
const update = ({_id, ...rest}) => User.update({_id}, rest)
const deleteById = (id) => User.deleteById(id)

module.exports = {
    getAll,
    create,
    findById,
    update,
    deleteById
}