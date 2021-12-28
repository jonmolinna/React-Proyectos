import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { User } from '../entity/User';
import { validate } from 'class-validator';

export class UserController {
    static addUser = async (req: Request, res: Response) => {
        const { name, username, password, confirmPassword } = req.body;
        const user = new User();

        user.name = name.trim().toLowerCase();
        user.username = username;
        user.password = password;

        // Validacion
        const errors = await (await validate(user, {validationError: { target: false, value: false }})).map(e => e.constraints);

        if (errors.length > 0) {
            return res.status(400).json(errors);
        };

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Las contraseñas son diferenctes'})
        }

        if (!name.match(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/)) {
            return res.status(400).json({ message: 'Nombre solo acepta letras y espacios'});
        }

        if (!username.match(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/)) {
            return res.status(400).json({ message: `${username} no es un username valido`});
        }

        const userRepository = getRepository(User);
        try {
            user.hashPassword();
            await userRepository.save(user);
        } catch (error) {
            return res.status(400).json({ message: 'El username ya existe'});
        }

        return res.status(201).json({ message : "Usuario creado"});
    };
};