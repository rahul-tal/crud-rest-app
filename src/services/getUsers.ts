import Users from '../models/users'
import {Request, Response} from 'express'
import { AppResponse } from '../types/app.types'
export const getUsersHandler = async(_req:Request,res:Response) =>{
    try{
        const users = await Users.find()
        res.json(users)
    }
    catch(err:any){
        res.status(500).json({message: err.message ?? err})
    }
}

export const getUserByIdHandler = async (req:Request,res:AppResponse)=>{
    try{
        const user = await Users.findById(req.params.id)
        if(user === null)
        return res.status(404).json({message: 'Cannot find the user'})
    }
    catch(err:any)
    {
        return res.status(500).json({message: err.message ?? err})
    }
    res.json(res.user)
}