import User from './User.js';
import bcrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Message from './Message.js';

const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const usernameRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

// Generando Token
function generateToken(user){
    return jwt.sign(
        {
            id: user._id,
            username: user.username,
            name: user.name,
            imagen: user.imgURL
        }, 
        "SECRET_KEY", 
        { expiresIn: '1h'}
    );
};

export const createUser = async (req, res) => {
    const { name, username, imgURL, password, confirmPassword } = req.body;
    const errors = {};

    try {
        if(name.trim() === '') throw errors.name = "Ingrese Nombre";
        if(name.length <= 3) throw errors.name = "El nombre debe tener mas de tres caracteres";
        if(nameRegex.test(name) === false) throw errors.name = "Nombre solo Acepta letras y espacio";

        if(username.trim() === '') throw errors.username = "Ingrese Usuario";
        if(usernameRegex.test(username) === false) throw errors.username = `${username} no es un usuario valido`;
        if(username.length <= 4) throw errors.username = "El usuario debe tener mas de 4 caracteres";

        if(imgURL.trim() === '') throw errors.img = "Ingrese una Imagen";

        if(!password) throw errors.password = "Ingrese una Contraseña";
        if(!confirmPassword) throw errors.passwordConfirm = 'Repita la Contraseña';
        if(password != confirmPassword) throw errors.password = "Las contraseñas no son iguales";
        
        const user = await User.findOne({ username });
        if(user) throw errors.usuario = 'El usuario ya existe';

        let contrasena = await bcrypt.hash(password, 6);

        const usuario = await User.create({ name, username, imgURL, password: contrasena });
        return res.json({ usuario })

    } catch (error) {
        return res.status(500).json({ error })
    }

};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    let errors = {};

    try {
        if(username.trim() === '') throw errors.username = "Ingrese Usuario";
        if(!password) throw errors.password = "Ingrese una Contraseña";

        const user = await User.findOne({ username });
        if(!user) throw errors.username = 'El usuario no existe';

        const correctPassword = await bcrypt.compare(password, user.password);
        if(!correctPassword) throw errors.password = 'La contraseña es Incorrecta';

        const token = generateToken(user);

        return res.status(200).json({
            ...user.toJSON(),
            token
        });
        
    } catch (error) {
        return res.status(500).json({ error })
    }
};

// Obteniendo los Usuarios
// Obtener Usuarios y sus mensajes
export const getUsersMessages = async (req, res) => {
    try {
        let users = await User.find({}, { password: 0, updatedAt: 0 })
        let usuarios = users.filter(user => user._id != req.usuarioToken.id);

        const allUserMessages = await Message.find({
            $or: [{ from: req.usuarioToken.username }, { to: req.usuarioToken.username }]
        })
        .sort({"createdAt": 'desc'});

        let usuariosMessage = [];

        usuarios = usuarios.map(otherUser => {
            let latestMessage = allUserMessages.find(
                m => m.from === otherUser.username || m.to === otherUser.username
            )
            let newUsuario =  {
                _id: otherUser._id,
                name: otherUser.name,
                username: otherUser.username,
                imgURL: otherUser.imgURL,
                createdAt: otherUser.createdAt,
                latestMessage: latestMessage? latestMessage : null 
            };
            usuariosMessage.push(newUsuario)
            // otherUser.latestMessage = latestMessage
            // return otherUser            
        }); 
    
        return res.status(200).json({ usuariosMessage })

    } catch (error) {
        return res.status(500).json({ error })
    }
};