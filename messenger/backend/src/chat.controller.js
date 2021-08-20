import Chat from './Chat.js';

export const getAllMessages = (req, res) => {
    Chat.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
};

export const addMessage = (req, res) => {
    const addMessage = req.body;
    Chat.create(addMessage, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data)
        }
    });
};