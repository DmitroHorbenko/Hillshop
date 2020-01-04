const router = require('express').Router();

router.get('/', (req, res) => res.send(
    res.send('Welcome')
))

const {
    getAll: getAllCategories,
    create: createCategory,
    findById: findCategoryById,
    update: updateCategory,
    deleteById: deleteCategoryById } = require('./controllers/categories')
router.get('/api/category', getAllCategories)
router.post('/api/category', createCategory)
router.get('/api/category/:id', findCategoryById)
router.put('/api/category', updateCategory)
router.delete('/api/category/:id', deleteCategoryById)

const {
    getAll: getAllProducts,
    create: createProduct,
    findById: findProductById,
    update: updateProduct,
    deleteById: deleteProductById } = require('./controllers/products')
router.get('/api/product', getAllProducts)
router.post('/api/product', createProduct)
router.get('/api/product/:id', findProductById)
router.put('/api/product/', updateProduct)
router.delete('/api/product/:id', deleteProductById)

const {
    getAll: getAllUsers,
    create: createUser,
    findById: findUserById,
    update: updateUser,
    deleteById: deleteUserById } = require('./controllers/users')
router.get('/api/user', getAllUsers)
router.post('/api/user', createUser)
router.get('/api/user/:id', findUserById)
router.put('/api/user/:id', updateUser)
router.delete('/api/user/:id', deleteUserById)

const {
    getAll: getAllOrders,
    create: createOrder,
    findById: findOrderById,
    update: updateOrder,
    deleteById: deleteOrderById } = require('./controllers/orders')
router.get('/api/order', getAllOrders)
router.post('/api/order', createOrder)
router.get('/api/order/:id', findOrderById)
router.put('/api/order/', updateOrder)
router.delete('/api/order/:id', deleteOrderById)

module.exports = router