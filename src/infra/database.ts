import mongoose, { Connection } from 'mongoose'
import { DatabaseConfig } from './database.types'
export interface MongoDatabase {
    connect: () => Connection
}

export class MongoDatabase implements MongoDatabase {
    private client: typeof mongoose
    private dbUrl: string
    constructor(private readonly dbConfig: DatabaseConfig, private readonly mongoClient: typeof mongoose){
        this.client = this.mongoClient
        this.dbUrl = this.dbConfig.databaseUrl
    }

    connect = () => {
        this.client.connect(this.dbUrl) 
        const db = this.client.connection
        db.on('error', (err)=> console.log(err))
        db.on('open',()=> console.log('connected to database'))
        return db
    }

}

export const createMongoDatabase = (config: DatabaseConfig, client: typeof mongoose) => new MongoDatabase(config,client)

