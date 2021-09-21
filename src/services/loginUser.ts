import { Request } from "express"
import Users from "../models/users"
import jwt from 'jsonwebtoken'
import { logger } from "../logger/logger"
import { LogLevels } from "../types/logger.types"
import { AppResponse } from "../types/app.types"

export const loginHandler = async (req: Request, res: AppResponse) => {

    try {
        const { email, password } = req.body

        if (!(email && password))
            res.status(400).send('Please check input, All inputs needed')

        const user = await Users.findOne({ email })

        if (!process.env.TOKEN_KEY)
            throw new Error('Token key missing in config')

        if (user && (password === user.password)) {
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            )
            user.token = token
            return res.status(200).json(user)
        }
        res.status(400).send("Invalid Credentials")
    }
    catch (err: any) {
        logger.log({ level: LogLevels.ERROR, message: `${err}` })
        return res.status(500).json({ message: err.message ?? err })
    }
}