import express from 'express'
import mongoose from 'mongoose'
import router from './routes/users'
const app = express()

const databaseUrl = 'mongodb://localhost/users'
const httpPort = 3000

mongoose.connect(databaseUrl)
const db = mongoose.connection

db.on('error',(error)=> console.log(error))
db.on('open',()=> console.log('connected to database'))

app.use(express.json())
app.use('/users', router)

app.listen(httpPort, ()=>{
console.log(`App running on ${httpPort}`)
})