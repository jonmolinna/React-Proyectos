import React from 'react';
import './Login.css';
import TwitterIcon from '@mui/icons-material/Twitter';

const Login = () => {
    return (
        <div className='login'>
            <div className='login_content'>
                <div className='login_body'>
                    <TwitterIcon 
                        sx={{ fontSize: 40 }}
                    />
                    <p>Inicia sesión en Twitter</p>
                    <form className='login_form' autoComplete="off">
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Contraseña' />
                        <button>Iniciar sesión</button>
                    </form>
                    <button className="login_changePassword">¿Olvidaste tu contraseña?</button>
                    <p className="login_register">¿No tienes una cuenta? <a href="index.html">Regístrate</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login;