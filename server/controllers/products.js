const  productServices = require('../services/products')

async function getAll(req, res, next) {
    try {
        const products = await productServices.getAll();
        res.json(products)
    } catch (err) {
        next(err)
    }
}

async function create(req, res, next) {
    try {
        const product = await productServices.create(req.body);
        res.json(product)
    } catch (err) {
        next(err)
    }
}

async function findById(req, res, next) {
    try {
        const product = await productServices.findById(req.params.id);
        res.json(product);
    } catch (err) {
        next(err)
    }
}

async function deleteById(req, res, next) {
    try {
        const product = await productServices.findById(req.params.id).remove().exec();
        res.json(product[req.params.id])
    } catch (err) {
        next(err)
    }
}

async function update(req, res, next) {
    try {
        const product = await productServices.findById(req.params.id).update(req.body);
        res.json(product)
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