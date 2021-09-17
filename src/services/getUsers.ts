import Users from '../models/users'

export const getUsers = async(_req:any,res:any)=>{
    try{
        const users = await Users.find()
        res.json(users)
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

export const getUserById = async (_req:any,res:any)=>{
    res.json(res.user)
}