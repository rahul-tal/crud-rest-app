import express from 'express'
import { verifyToken } from '../middleware/jwtAuthentication'
import { createUserHandler, deleteUserHandler, getUserByIdHandler, getUsersHandler, loginHandler, registerHandler, updateUserHandler } from '../services'


const router = express.Router()


router.get('/', verifyToken, getUsersHandler)

router.get('/:id', verifyToken, getUserByIdHandler)

router.post('/', verifyToken, createUserHandler)

router.patch('/:id', verifyToken, updateUserHandler)

router.delete('/:id', verifyToken, deleteUserHandler)

router.post('/register', registerHandler)

router.post('/login', loginHandler)

export default router