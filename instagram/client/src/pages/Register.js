import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className="register">
            <div className="register__top">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/196px-Instagram_logo.svg.png" 
                    alt="logo instagram" 
                />
                <h2>Regístrate para ver fotos y videos de tus amigos.</h2>
                <form className="register__form">
                    <input type="text" placeholder="Nombre Completo" />
                    <input type="text" placeholder="Nombre de Usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <input type="password" placeholder="Repita la Contraseña" />
                    <button type="submit">Regístrate</button>
                </form>
            </div>
            <div className="register__bottom">
                <h2>Sesion</h2>
            </div>
        </div>
    )
}

export default Register;
