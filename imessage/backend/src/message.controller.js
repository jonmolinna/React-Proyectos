import User from './User.js';
import Message from './Message.js';

// Añadir un Mensaje
export const addMessaje = async (req, res) => {
    const { to, message } = req.body;
    const errors = {};

    try {
        const recipient = await User.findOne({ username: to });

        if(!recipient) throw errors.message = "El usuario no existe";
        if(recipient.username === req.usuarioToken.username) throw errors.message = "No puedes enviar mensaje a ti mismo";
        if(message.trim() === "") throw errors.message = "No puedes enviar un mensaje vacio";

        const content = await Message.create({
            from: req.usuarioToken.username,
            to,
            message
        });

        return res.status(200).json({ content })

    } catch (error) {
        return res.status(500).json({ error })
    }
};

// Obtener Messges
export const getMessages = async (req, res) => {
    const { from } = req.body;
    const errors = {};

    try {
        const otherUser = await User.findOne({ username: from });

        if(!otherUser) throw errors.message = "Usuario no econtrado";

        const usernames = [req.usuarioToken.username, otherUser.username];
        
        const messages = await Message.find({
            from: {$in: usernames},
            to: {$in: usernames},
        });

        return res.status(200).json({ messages })
        
    } catch (error) {
        return res.status(500).json({ error })
    }
};


/*
Consultas
https://mongoosejs.com/docs/queries.html
*/