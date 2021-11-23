import React from 'react';
import './Inicio.css';

import { useAuthState } from '../context/auth';
import Capitalize from '../util/capitalize';

const Inicio = () => {
    const { usuario } = useAuthState();

    return (
        <div className="inicio">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/100px-IMessage_logo.svg.png" 
                alt="logo" 
            />
            <h2>Hola</h2>
            <h4>
                { usuario? `${Capitalize(usuario.name)}`: 'desconocido'}
            </h4>
            <p>Bienvenidos a Imessage Clone</p>
        </div>
    )
}

export default Inicio;