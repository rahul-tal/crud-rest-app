export const updateUser = async(req:any,res:any)=>{
    if (req.body.name != null) {
        res.user.name = req.body.name
      }
    if (req.body.age != null) {
        res.user.age = req.body.age
      }
    
    if (req.body.email != null) {
        res.user.email = req.body.email
      }
      try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
      } catch (err) {
        res.status(400).json({ err })
      }
}