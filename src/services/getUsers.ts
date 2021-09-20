import Users from '../models/users'
import {Request, Response} from 'express'
import { AppResponse } from '../types/app.types'
import { logger } from '../logger/logger'
import { LogLevels } from '../types/logger.types'

export const getUsersHandler = async(req:Request,res:Response) =>{
    logger.log({level: LogLevels.INFO, message: `${req.method} request to /users${req.path}`} )
    try{
        const users = await Users.find()
        res.json(users)
    }
    catch(err:any){
        logger.log({level:LogLevels.ERROR, message:`${err}` })
        res.status(500).json({message: err.message ?? err})
    }
}

export const getUserByIdHandler = async (req:Request,res:AppResponse)=>{
    let user
    logger.log({level: LogLevels.INFO, message: `${req.method} request to /users${req.path}`} )
    try{
        user = await Users.findById(req.params.id)
        if(user === null)
        return res.status(404).json({message: 'Cannot find the user'})
    }
    catch(err:any)
    {   
        logger.log({level:LogLevels.ERROR, message:`${err}` })
        return res.status(500).json({message: err.message ?? err})
    }
    res.json(user)
}