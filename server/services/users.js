const User = require('../models/user')

const getAll = () => User.find().populate("order")
const create = ( user ) => User.create( user )
const findById = (id) => User.findById(id).populate("order")
const update = ({_id, ...rest}) => User.update({_id}, rest)
const deleteById = (id) => User.deleteById(id)

module.exports = {
    getAll,
    create,
    findById,
    update,
    deleteById
}