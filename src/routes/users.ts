import express from 'express'
import Users from '../models/users'
const router = express.Router()

//getting all users

router.get('/', async(req,res)=>{
try{
    const users = await Users.find()
    res.json(users)
}
catch(err){
    res.status(500).json({error: err})
}
})
//getting one

router.get('/:id', (req,res)=>{
res.send(req.params.id)    
})

//creating one
router.post('/', async(req,res)=>{
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
})
//updating one - patch because we will only update what user 
//passes us if passes name then only update name not anything elses
//put updates all 
router.patch('/', (req,res)=>{
    
})
//deleting one

router.get('/:id', (req,res)=>{
    
})

async function getUsers(req: express.Request,res: express.Response,next: express.NextFunction){
    try{
        const user = await Users.findById(req.params.id)
        if(user === null)
        return res.status(404)
    }
    catch(err){

    }
}
export default router