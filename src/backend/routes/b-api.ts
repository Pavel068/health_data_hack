import express from 'express'
const router = express.Router()

import { index } from '../controllers/b-api/IndexController'
import { auth } from '../controllers/b-api/AuthController'

router.get('/', index)
router.post('/auth', auth)

export const routes = router
