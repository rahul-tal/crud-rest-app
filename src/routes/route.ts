import express from 'express'
import { createUserHandler, deleteUserHandler, getUserByIdHandler, getUsersHandler, updateUserHandler } from '../services'

const router = express.Router()


router.get('/', getUsersHandler)

router.get('/:id', getUserByIdHandler)

router.post('/', createUserHandler)

router.patch('/:id', updateUserHandler)

router.delete('/:id', deleteUserHandler)

export default router