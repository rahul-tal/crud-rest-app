import {Response} from 'express'
import { IUser } from '../infra/database.types'

export type AppResponse =   Response & {
user?: IUser
}
