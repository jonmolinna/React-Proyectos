import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import ChatMessage from './ChatMessage';
import { useParams } from 'react-router-dom';

const Chat = ({ user, messages, sendMensage, grupos }) => {
    const [mensage, setMensage] = useState('');
    const { id } = useParams();
    messages.sort((a, b) => Number(b.timestamp) - Number(a.timestamp) );

    let grupoMensajes = messages.filter(element => element.idGrupo === id);
    let grupo = grupos.filter(element => element._id === id)[0]; 
    let ultimoMensaje = grupoMensajes[0];
    let numero = Number(ultimoMensaje.timestamp);
    let fecha = new Date(numero).toLocaleDateString();
    let hora = new Date(numero).toLocaleTimeString();

    const handleMensage = (e) => {
        e.preventDefault();
        sendMensage(mensage, id);
        setMensage('');
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={grupo.imagen} />
                <div className="chat__headerInfo">
                    <h3>{grupo.name}</h3>
                    <p>Ult. mensaje {fecha} {hora}</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {
                    grupoMensajes.map(message => (
                        <ChatMessage key={message._id} message={message} user={user} />
                    ))
                }
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <form onSubmit={handleMensage}>
                    <input 
                        type="text" 
                        placeholder="Escribe un mensage aquí"
                        value={mensage}
                        onChange={e => setMensage(e.target.value)} 
                    />
                    <button type="submit">Enviar</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;