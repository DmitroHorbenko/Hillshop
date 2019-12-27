const  orderService = require('../services/orders')

async function getAll(req, res, next) {
    try {
        const orders = await orderServices.getAll();
        res.json(orders)
    } catch (err) {
        next(err)
    }
}

async function create(req, res, next) {
    try {
        const order = await orderServices.create(req.body);
        res.json(order)
    } catch (err) {
        next(err)
    }
}

async function findById(req, res, next) {
    try {
        const order = await orderServices.findById(req.params.id);
        res.json(order);
    } catch (err) {
        next(err)
    }
}

async function deleteById(req, res, next) {
    try {
        const order = await orderServices.findById(req.params.id).remove().exec();
        res.json(order[req.params.id])
    } catch (err) {
        next(err)
    }
}

async function update(req, res, next) {
    try {
        const order = await orderServices.findById(req.params.id).update(req.body);
        res.json(order)
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

