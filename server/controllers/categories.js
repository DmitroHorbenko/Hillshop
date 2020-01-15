const categoryServices = require('../services/categories')

async function getAll(req, res, next) {
    try {
        const categories = await categoryServices.getAll();
        res.json(categories)
    } catch (err) {
        next(err)
    }
}

async function create(req, res, next) {
    try {
        const category = await categoryServices.create(req.body);
        res.json(category)
    } catch (err) {
        next(err)
    }
}

async function findById(req, res, next) {
    try {
        const category = await categoryServices.findById(req.params.id);
        res.json(category);
    } catch (err) {
        next(err)
    }
}

async function deleteById(req, res, next) {
    try {
        const category = await categoryServices.findById(req.params.id).remove().exec();
        res.json(category[req.params.id])
    } catch (err) {
        next(err)
    }
}

async function update(req, res, next) {
    try {
        const category = await categoryServices.findById(req.params.id).update(req.body);
        res.json(category)
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