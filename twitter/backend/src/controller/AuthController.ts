import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';

import config from '../config/config';

export class AuthController {
    static login = async (req:Request, res: Response) => {
        const { username, password } = req.body;

        if(!(username && password)) {
            return res.status(400).json({ message: 'Ingrese usuario y contraseña'});
        };

        const userRepository = getRepository(User);
        let user : User;

        try {
            user = await userRepository.findOneOrFail({ where: {username}});
        } catch (error) {
            return res.status(400).json({ message: 'Credenciales no válidas'})
        }

        // Verificar la contraseña
        if (!user.checkPassword(password)) {
            return res.status(400).json({ message: 'Credenciales no válidas'})
        }

        // Creando Token
        const token = jwt.sign({ userId: user.uuid, username: user.username, name: user.name}, config.jwtSecret, { expiresIn: '1h'});
        res.status(200).json({ 
            userId: user.uuid,
            username: user.username,
            name: user.name,
            token 
        })
    };
};