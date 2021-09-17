import express from "express"
import Users from "../models/users"

export async function getUser(req: any,res: any,next: express.NextFunction){
    let user: any
    try{
         user = await Users.findById(req.params.id)
        if(user === null)
        return res.status(404).json({message: 'Cannot find the user'})
    }
    catch(err){
     return res.status(500).json({error: err})
    }
    res.user = user
    next()
}