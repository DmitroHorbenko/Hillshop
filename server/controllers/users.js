const usersServices = require('../services/users')

async function getAll (req, res, next) {
    try {
        const users = await usersServices.getAll();
        res.json( users )
    } catch (err) {
        next(err)
    }
}

async function create (req, res, next) {
    try {
        const user = await usersServices.create( req.body );
        res.json( user )
    } catch (err) {
        next(err)
    }
}

async function findById (req, res, next) {
    try {
        const user = await usersServices.findById(req.params.id);
        res.json (user);
    } catch (err) {
        next(err)
    }
}

async function deleteById (req, res, next) {
    try {
        const user = await usersServices.findById(req.params.id).remove().exec();
        res.json( user[req.params.id] )
    } catch (err) {
        next(err)
    }
}

async function update (req, res, next) {
    try {
        const user = await usersServices.findById(req.params.id).update(req.body);
        res.json( user )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAll,
    create,
    findById,
    update,
    deleteById,
}