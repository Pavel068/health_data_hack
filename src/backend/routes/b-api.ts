import express from 'express'

const router = express.Router()

import { index } from '../controllers/b-api/IndexController'
import { auth } from '../controllers/b-api/AuthController'
import { getUsers, addUser, removeUser } from '../controllers/b-api/UsersController'
import { test } from '../controllers/api/v1/MLController'

router.get('/', index)
router.post('/auth', auth)
router.get('/users', getUsers)
router.post('/users', addUser)
router.delete('/users/:id', removeUser)

router.get('/ml/test', test)

export const routes = router
