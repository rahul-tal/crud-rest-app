import mongoose, { Connection } from 'mongoose'
import winston from 'winston'
import { LogLevels } from '../types/logger.types'
import { DatabaseConfig } from './database.types'
export interface MongoDatabase {
    connect: (logger: winston.Logger) => Connection
}

export class MongoDatabase implements MongoDatabase {
    private client: typeof mongoose
    private dbUrl: string
    constructor(private readonly dbConfig: DatabaseConfig, private readonly mongoClient: typeof mongoose) {
        this.client = this.mongoClient
        this.dbUrl = this.dbConfig.databaseUrl
    }

    connect = (logger: winston.Logger) => {
        this.client.connect(this.dbUrl)
        const db = this.client.connection
        db.on('error', (err) => logger.log({ level: LogLevels.ERROR, message: `${err}` }))
        db.on('open', () => logger.log({ level: LogLevels.INFO, message: 'connected to database' }))
        return db
    }

}

export const createMongoDatabase = (config: DatabaseConfig, client: typeof mongoose) => new MongoDatabase(config, client)

