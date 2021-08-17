import Grupo from '../models/Grupo.js';

export const getAllGroupos = (req, res) => {
    Grupo.find((err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
};

export const addGrupo = (req, res) => {
    const dbGrupo = req.body;
    Grupo.create(dbGrupo, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }      
    })
};