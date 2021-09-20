import User from "../models/users"
import { Request } from 'express'
import { AppResponse } from "../types/app.types"
import { logger } from "../logger/logger"
import { LogLevels } from "../types/logger.types"

export const createUserHandler = async (req:Request,res:AppResponse)=>{
    logger.log({level: LogLevels.INFO, message: `${req.method} request to /users${req.path}`} )

    const user = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password
    })

    try{
    const newUser = await user.save()
    res.status(201).json(newUser)
    }
    catch(err){
        logger.log({level:LogLevels.ERROR, message:`${err}` })
        res.status(400).json({error: err})
    }
}