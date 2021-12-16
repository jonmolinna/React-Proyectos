import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { validateRegister, validateLogin } from '../utils/validator.user.js';
import { config } from '../utils/config.js';

function generateToken(user){
    return jwt.sign(
        {
            id: user._id,
            username: user.username,
            name: user.name,
        },
        config.TOKEN_SECRET_KEY,
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
        return res.status(500).json({ error })
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
            id: user._id,
            name: user.name,
            username: user.username,
            imgUrl: user.imgUrl,
            token
        });
        
    } catch (error) {
        return res.status(500).json({ error })
    }
}

export const getFiveUsers = async (req, res) => {
    try {
        let fiveUsers = [];
        console.log(req.userToken)
        const users = await User.find({}, {password: 0});
        users.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        

        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ message: error})
    }
};