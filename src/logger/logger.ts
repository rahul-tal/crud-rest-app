import winston from 'winston'
import dotenv from 'dotenv'
import { myLevels, LogLevels } from '../types/logger.types'

dotenv.config()
const { combine, timestamp, label, printf } = winston.format;
const color: {[key: string]: any} = {
info: '\x1b[36m',
error: '\x1b[31m',
warn: '\x1b[33m'
}

const myFormat = printf(({ level, message, timestamp }) => {
return `${level}: ${color[level] || ''} || ${timestamp} || ${message}\x1b[0m `;
});


export const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || LogLevels.INFO,
    format: combine(
        winston.format.prettyPrint(),
        winston.format.metadata(),
        winston.format.json(),
        timestamp(),
        myFormat
        ),
    levels: myLevels.levels,
    transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
]})

