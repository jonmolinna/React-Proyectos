import { getRepository, Not } from 'typeorm';
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
            return res.status(400).json({ message: 'Ingrese un nombre válido'});
        }

        if (!username.match(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/)) {
            return res.status(400).json({ message: `${username} es un usuario no válido`});
        }

        const userRepository = getRepository(User);
        try {
            user.hashPassword();
            await userRepository.save(user);
        } catch (error) {
            return res.status(400).json({ message: 'El usuario ya existe'});
        }

        return res.status(201).json({ message : "Usuario creado"});
    };

    static getUsers = async (req: Request, res: Response) => {
        const userRepository = getRepository(User);
        const { userId } = res.locals.jwtPayload;
        let users;

        try {
            users = await userRepository.find({
                order: {
                    createdAt: "DESC",
                },
                where: { uuid: Not(userId)},
                skip: 0,
                take: 3,
            });    
        } catch (e) {
            res.status(404).json({ message: 'Algo salio mal' });
        }

        if (users.length > 0 ){
            const newUsers = [];
            for (let i=0; i < users.length; i++) {
                let user = {
                    uuid: users[i].uuid,
                    username: users[i].username,
                    name: users[i].name,
                }

                newUsers.push(user)
            };
            return res.status(201).json({ users : newUsers });
        } else  {
            res.status(404).json({ message: 'No resultado' });
        }
    }
};