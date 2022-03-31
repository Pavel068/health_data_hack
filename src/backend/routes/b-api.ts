import express from 'express'

const router = express.Router()

import {index} from '../controllers/b-api/IndexController'
import {auth} from '../controllers/b-api/AuthController'
import {getUsers, addUser, removeUser} from "../controllers/b-api/UsersController";

router.get('/', index)
router.post('/auth', auth)
router.get('/users', getUsers)
router.post('/users', addUser)
router.delete('/users/:id', removeUser)

export const routes = router
