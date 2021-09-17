import Users from "../models/users"
import {Request } from 'express'
import { AppResponse } from "../types/app.types"

export const updateUserHandler = async(req:Request,res:AppResponse)=>{
  let user: Record<string,any> | null
   try{
       user = await Users.findById(req.params.id)
      if(user === null )
        return res.status(404).json({message: 'Cannot find the user'})
      
    }
    catch(err){
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
      } catch (err:any) {
        res.status(400).json({ message: err.message ?? err })
      }
}