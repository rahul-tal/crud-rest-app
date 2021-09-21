import dotenv from 'dotenv'
import  express from 'express'
import mongoose from 'mongoose'
import { createMongoDatabase } from './infra/database'
import { logger } from './logger/logger'
import router from './routes/route'
import { LogLevels } from './types/logger.types'

dotenv.config()
const app = express()

const databaseUrl = process.env.DB_URL ||  'mongodb://127.0.0.1:27017/users'
const httpPort =  process.env.HTTP_PORT || 3000

createMongoDatabase({databaseUrl}, mongoose).connect(logger)
app.use(express.json())
app.use('/users' , router)

app.listen(httpPort, ()=>{
logger.log({ level: LogLevels.INFO, message: `App running on ${httpPort}`})
})