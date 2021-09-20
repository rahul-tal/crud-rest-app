import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import Users from "../models/users"
import jwt from 'jsonwebtoken'
import { logger } from "../logger/logger"
import { LogLevels } from "../types/logger.types"

export const registerHandler = async (req:Request, res: Response) => {

try{
    const {name, email, password, age } = req.body

    if(!(name && password  && email && age))
    res.status(400).send('Please check input, All inputs needed')

    const oldUser = await Users.findOne({ email })

    if(oldUser)
    return res.status(409).send('User already present, please use a different login id or login')
    

    const user = await Users.create({
        name,
        email: email.toLowerCase(),
        password,
        age
    })

    if(!process.env.TOKEN_KEY)
        throw new Error('Token key missing in config')

    const token = jwt.sign({user_id: user._id, email}, process.env.TOKEN_KEY, {expiresIn: "2h"})

    user.token = token
    res.status(201).json(user)
}

catch(err:any)
{
    logger.log({level:LogLevels.ERROR, message:`${err}` })
    return res.status(500).json({message: err.message ?? err})
}

}