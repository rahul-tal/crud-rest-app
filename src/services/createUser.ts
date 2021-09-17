import Users from "../models/users"
import { Request } from 'express'
import { AppResponse } from "../types/app.types"

export const createUserHandler = async(req:Request,res:AppResponse)=>{
    const user = new Users({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
    })
    try{
    const newUser = await user.save()
    res.status(201).json(newUser)
    }
    catch(err){
        res.status(400).json({error: err})
    }
}