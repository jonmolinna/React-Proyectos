import React from 'react'
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/150px-Facebook_Messenger_logo_2020.svg.png" alt="logo__messenger" />
            <h2>Facebook Messenger Clone</h2>
            <form className="login__form">
                <input type="text" placeholder="Ingrese Nombre" />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login
