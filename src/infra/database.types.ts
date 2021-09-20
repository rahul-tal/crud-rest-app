import {Document} from 'mongoose'

export type DatabaseConfig = {
    databaseUrl: string
}

export interface IUser extends Document {
    name: string,
    age: number,
    email: string,
    password: string,
    token: string
}
