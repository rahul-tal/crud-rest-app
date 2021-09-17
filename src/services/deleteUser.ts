import { Request } from 'express'
import Users from '../models/users'
import { AppResponse } from '../types/app.types'
export const deleteUserHandler = async(req:Request,res: AppResponse)=>{
    try {
        await Users.findById(req.params.id).remove()
        res.json({ message: 'Deleted User' })
      } catch (err) {
        res.status(500).json({err})
      }
}

