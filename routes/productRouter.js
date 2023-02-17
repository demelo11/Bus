const productController = require('../controllers/productController.js')

const router = require('express').Router()

router.post('/addBus', productController.addBus)

router.get('/allBusses', productController.getAllBusses)

router.get('/:id', productController.getOneBus)

router.put('/:id', productController.updateBus)

router.delete('/:id', productController.deleteBus)

module.exports = router