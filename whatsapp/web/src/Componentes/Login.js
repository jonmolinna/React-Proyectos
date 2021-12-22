import React, { useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';

import { useAuthDispatch } from '../reducers/userReducer.js';
import { TYPES } from '../reducers/actions/userActions.js';

const Login = () => {
    const [name, setName] = useState('');
    const dispatch = useAuthDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        if(!name) return toast.error('Ingrese un Nombre');
        if(name.trim() === '') return toast.error('Ingrese un Nombre');
        if(name.length <= 4) return toast.error('El nombre debe tener mas de 4 caracteres');
        if(!name.match(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/)) return toast.error('Nombre solo acepta letras y espacios');

        dispatch({
            type: TYPES.LOGIN,
            payload: name.trim(),
        })
        setName('');
    };

    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" alt="whatsapp_logo" />
            <h2>Whatsapp Web</h2>
            <form className="login__form" onSubmit={handleChange}>
                <input 
                    type="text" 
                    placeholder="Ingrese un Nombre"
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login;