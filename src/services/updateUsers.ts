import {Request } from 'express'
import { AppResponse } from "../types/app.types"
import { logger } from "../logger/logger"
import { LogLevels } from "../types/logger.types"
import { IUser } from '../infra/database.types'
import User from '../models/users'

export const updateUserHandler = async (req:Request,res:AppResponse)=>{

  logger.log({level: LogLevels.INFO, message: `${req.method} request to /users${req.path}`} )
  let user: IUser | null
   
    try{
      user = await User.findById(req.params.id)
      if(user === null )
        return res.status(404).json({message: 'Cannot find the user'}) 
    }
    catch(err){
      logger.log({level:LogLevels.ERROR, message:`${err}` })
      return res.status(500).json({error: err})
     }  
    
    if (req.body.name != null) {
          user.name = req.body.name
        }

    if (req.body.age != null) {
          user.age = req.body.age
        }

    if (req.body.email != null) {
           user.email = req.body.email
        }
    
    try {
        const updatedUser = await user.save()
        res.json(updatedUser)
      }      
    catch (err:any) {
        logger.log({level:LogLevels.ERROR, message:`${err}` })
        res.status(400).json({ message: err.message ?? err })
      }

}