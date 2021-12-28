import React from 'react';
import './Register.css';
import TwitterIcon from '@mui/icons-material/Twitter';

const Register = () => {
    return (
        <div className='register'>
            <div className='register_content'>
                <div className='register_body'>
                    <TwitterIcon 
                        sx={{ fontSize: 40 }}
                    />
                    <p>Únete a Twitter hoy mismo.</p>
                    <form className='register_form' autoComplete="off">
                        <input type="text" placeholder='Nombre' />
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Contraseña' />
                        <input type="password" placeholder='Confirma Contreseña' />
                        <button>Registrate</button>
                    </form>
                    <p className="register_login">¿Ya tienes una cuenta? <a href="index.html">Inicia sesión</a></p>
                </div>
            </div>
        </div>
    )
}

export default Register;