import express from 'express'
import * as controller from '../controller/index.js'

var router = express.Router()

/* GET users listing. */
router.get('/:id', controller.getProductByID)
router.get('/', controller.getAllProducts).post('/', controller.createProduct)

export { router as ProductRoute }
