import { Request } from 'express'
import { logger } from '../logger/logger'
import Users from '../models/users'
import { AppResponse } from '../types/app.types'
import { LogLevels } from '../types/logger.types'

export const deleteUserHandler = async (req:Request,res: AppResponse)=>{

  logger.log({level: LogLevels.INFO, message: `${req.method} request to /users${req.path}`} )
    try {
        await Users.findById(req.params.id).remove()
        res.json({ message: 'Deleted User' })
      } 
    catch (err) {
        logger.log({level:LogLevels.ERROR, message:`${err}` })
        res.status(500).json({err})
      }
}

