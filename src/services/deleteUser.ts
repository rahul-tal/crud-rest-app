export const deleteUser = async(_req:any,res:any)=>{
    try {
        await res.user.remove()
        res.json({ message: 'Deleted Subscriber' })
      } catch (err) {
        res.status(500).json({err})
      }
}