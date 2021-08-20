import React from 'react';
import './ChatInicio.css';

const ChatInicio = ({ user }) => {
    return (
        <div className="chatInicio">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" alt="whatsapp_logo" />
            <h2>Hola</h2>
            <h3>{ user }</h3>
            <h3>Bienvenido a Whatsapp Web Clone</h3>
        </div>
    )
}

export default ChatInicio;