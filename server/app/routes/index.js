import express from 'express'
import { ProductRoute } from './ProductRoute.js'
import { UserRoute } from './UserRoute.js'
import { insertData } from '../controller/insertData.js'

const router = express.Router()

router.use('/api/v1/users', UserRoute)
router.use('/api/v1/products', ProductRoute)

router.get('/api/v1/insert-data', insertData)

export default router
