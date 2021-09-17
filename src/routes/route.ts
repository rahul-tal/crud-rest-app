import express from 'express'
import {getUser} from '../middleware/'
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../services'

const router = express.Router()


router.get('/',getUsers)

router.get('/:id', getUser, getUserById)

router.post('/', createUser)

router.patch('/:id', getUser, updateUser)

router.delete('/:id', getUser, deleteUser)

export default router