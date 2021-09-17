import {Response} from 'express'
export type AppResponse =   Response & {
user?: Record<string, any>
}
