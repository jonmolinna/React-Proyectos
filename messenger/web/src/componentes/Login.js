import React, { useState } from 'react'
import './Login.css';
import { toast } from 'react-toastify';

import { useAuthDispatch } from '../context/auth.js';

const Login = () => {
    const [username, setUsername] = useState('');
    const dispatch = useAuthDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        if(!username) return toast.error('Ingrese un Nombre');
        if(username.trim() === '') return toast.error('Ingrese un Nombre');

        dispatch({
            type: 'LOGIN',
            payload: username.trim(),
        })
        setUsername('');
    }

    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/150px-Facebook_Messenger_logo_2020.svg.png" alt="logo__messenger" />
            <h2>Facebook Messenger Clone</h2>
            <form className="login__form" onSubmit={handleChange}>
                <input 
                    type="text" 
                    placeholder="Ingrese Nombre" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login;
