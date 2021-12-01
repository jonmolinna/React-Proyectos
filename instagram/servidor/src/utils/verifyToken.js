import jwt from 'jsonwebtoken';
import { config } from '../utils/config.js';

function verifyToken (req, res, next){
    try {
        const token = req.headers['authorization'];
        
        if (!token) return res.status(401).json({
            message: 'No tienes autorización',
        });

        const bearer = token.split(" ");
        const bearerToken = bearer[1];
        const decoded = jwt.verify(bearerToken, config.TOKEN_SECRET_KEY);
        req.userToken = decoded;
        next();

    } catch (error) {
        return res.status(401).json({ message: 'No tienes autorizacion'})
    }
};

export default verifyToken;