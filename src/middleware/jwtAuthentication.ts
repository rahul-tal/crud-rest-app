import { Request, NextFunction  } from "express";
import { AppResponse } from "../types/app.types";
import jwt from 'jsonwebtoken'
import { logger } from "../logger/logger";
import { LogLevels } from "../types/logger.types";

const config = process.env;

export const verifyToken = async (req: Request, res: AppResponse, next: NextFunction ) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {

    if(!config.TOKEN_KEY)
      throw new Error('Please provide a token key in config')

    const decoded = jwt.verify(token, config.TOKEN_KEY)
    req.user = decoded;
  } catch (err: any) {
    logger.log(LogLevels.ERROR, {message: err.message ?? err})
    return res.status(401).send(`${err}`);
  }
  return next();
}

