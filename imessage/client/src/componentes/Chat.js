import React from 'react';
import './Chat.css';
import { IconButton } from '@mui/material';
import MicNoneIcon from '@mui/icons-material/MicNone';
import Message from './Message';

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To: <span className="chat__name">Nombre</span></h4>
                <strong>Details</strong>
            </div>

            <div className="chat__messages">
                <Message />
            </div>

            <div className="chat__input">
                <form>
                    <input type="text" placeholder="Mensaje" />
                    <button>Enviar Message</button>
                </form>
                <IconButton>
                    <MicNoneIcon className="chat__mic" />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;