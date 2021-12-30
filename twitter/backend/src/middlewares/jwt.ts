import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import config from '../config/config';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers['authorization'];
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    } catch (e) {
        return res.status(401).json({ message: 'No tienes autorización' })
    }

    const { userId, username, name} = jwtPayload;
    const newToken = jwt.sign({ userId, username, name }, config.jwtSecret, { expiresIn: '1h' });
    res.setHeader('token', newToken);
    // call next
    next();
}