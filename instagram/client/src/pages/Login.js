import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
           <div className="login__header">
               <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/196px-Instagram_logo.svg.png"
                alt="logo" 
              />
              <form className="login__form">
                  <input type="text" placeholder="Usuario" />
                  <input type="password" placeholder="Contraseña" />
                  <button>Iniciar sesión</button>
              </form>
           </div>

           <div className="login__bottom">
               <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
           </div>
        </div>
    )
}

export default Login;