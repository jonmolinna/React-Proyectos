import User from './User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { validateRegister, validateLogin } from './utils/validator.js';
import { config } from './config.js';

function generateToken(user){
    return jwt.sign(
        {
            id: user._id,
            username: user.username,
            name: user.name
        },
        config.SECRET_KEY,
        { expiresIn: '1h'}
    )
}


export const createUser = async (req, res) => {
    const { name, username, password, confirmPassword } = req.body;

    try {
        const { valid, errors } = validateRegister(name, username, password, confirmPassword);

        if(!valid){
            throw errors
        }

        const user = await User.findOne({ username });
        if(user){
             throw errors.username = {
                 username: 'El usuario ya existe'
            }
        }

        const contrasena = await bcrypt.hash(password, 6);

        const usuario = await User.create({ name, username, password: contrasena });
        return res.json({ usuario });
        
    } catch (error) {
        return res.json({ error })
    }
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const { valid, errors } = validateLogin(username, password);
        
        if(!valid){
            throw errors
        }

        const user = await User.findOne({ username });
        if(!user){
            throw errors.username = {
                username: 'El usuario no existe'
           }
       }

       const match = await bcrypt.compare(password, user.password);
       if(!match){
           throw errors.password = {
               password: 'La contraseña es incorrecta',
           }
       }

       const token = generateToken(user);

       return res.status(200).json({
            ...user.toJSON(),
            token
        });
        
    } catch (error) {
        return res.json({ error })
    }
}