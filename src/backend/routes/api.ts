import express from 'express'
const router = express.Router()

import { login, getMe } from '../controllers/api/v1/AuthController'
import { test } from '../controllers/api/v1/MLController'

import { Authorized } from '../middleware/Auth'

router.post('/auth', login)
router.get('/me', Authorized, getMe)

router.get('/ml/test', Authorized, test)

export const APIRoutes = router
