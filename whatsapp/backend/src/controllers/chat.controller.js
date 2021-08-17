import Chat from '../models/Chats.js';

export const getAllMessages = (req, res) => {
    Chat.find((err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

export const addMessage = (req, res) => {
    const dbMessage = req.body;
    Chat.create(dbMessage, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data)
        }
    });
};