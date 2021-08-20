import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleLogin }) => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        if(!name) return window.alert("Ingrese su Nombre");
        handleLogin(name)
    };

    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" alt="whatsapp_logo" />
            <h2>Whatsapp Web</h2>
            <form className="login__form" onSubmit={handleChange}>
                <input type="text" placeholder="Ingrese su Nombre" onChange={e => setName(e.target.value)} />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login;