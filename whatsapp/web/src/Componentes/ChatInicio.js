import React from 'react';
import './ChatInicio.css';

import { useAuthState } from '../reducers/userReducer';
import { Capitalize } from '../helpers/capitalize';

const ChatInicio = () => {
    const { username } = useAuthState();

    return (
        <div className="chatInicio">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" alt="whatsapp_logo" />
            <h2>Hola</h2>
            <h3>{ Capitalize(username) }</h3>
            <h3>Bienvenido a Whatsapp Web Clone</h3>
        </div>
    )
};

export default ChatInicio;