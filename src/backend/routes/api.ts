import express from 'express'
const router = express.Router()

import { login } from '../controllers/api/v1/AuthController'

router.post('/auth', login)

export const APIRoutes = router
