import message from './data.js';

// Agregar un Nuevo Grupo
export const addGrupoMessage = (req, res) => {
    const dbData = req.body;

    message.create(dbData, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
};

// Agregar un Nuevo Mensaje al Grupo
export const addMessage = (req, res) => {
    message.updateOne(
        { _id: req.query.id },
        { $push: { conversation: req.body }},
        (err, data) => {
            if(err){
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        }
    )
};

// Obtener el Ultimo Message de cada Grupo
export const getLastMessageGroups = (req, res) => {
    message.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {

            let conversation = [];

            data.map(conversationData => {
                conversationData.conversation.sort((a, b) => Number(b.timestamp) - Number(a.timestamp))
                
                const conversationInfo = {
                    id: conversationData._id,
                    name: conversationData.chatName,
                    timestamp: conversationData.conversation[0].timestamp,
                    image: conversationData.imgUrl
                }

                conversation.push(conversationInfo);
            });

            res.status(200).send(conversation);
        }
    })
};

// Obtener un Grupo
export const getGroup = (req, res) => {
    const id = req.query.id;

    message.find({ _id: id }, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
};

// Obtener el ultimo message de un Grupo
export const getLastMessageGroup = (req, res) => {
    const id = req.query.id

    message.find({ _id: id }, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            let convData = data[0].conversation;
            convData.sort((b, a) => {
                return a.timestamp - b.timestamp;
            });

            res.status(200).send(convData[0]);
        };
    });
};