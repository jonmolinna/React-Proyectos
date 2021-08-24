import React, { useState } from 'react'
import './Login.css';

const Login = ({ handleUser }) => {
    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        if(!username) return window.alert('Ingrese tu Nombre');
        handleUser(username)
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

export default Login
