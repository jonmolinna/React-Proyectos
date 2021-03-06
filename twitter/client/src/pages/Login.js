import React, { useState } from 'react';
import './Login.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import { toast } from 'react-hot-toast';
import { Link, useHistory } from 'react-router-dom';

import axios from '../util/axios';
import { useAuthDispatch } from '../context/auth';

const initialForm = {
    username: "",
    password: "",
}

const Login = () => {
    const [form, setForm] = useState(initialForm);
    let history = useHistory();
    const dispatch = useAuthDispatch();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-type" : "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    username: form.username,
                    password: form.password,
                })
            };

            const res = await axios('/auth', options);
            dispatch({
                type: 'LOGIN',
                payload: res.data,
            });
            setForm(initialForm);
            history.push("/")
        } catch (e) {
            toast.error(e.response.data.message);
        }
    };
    
    return (
        <div className='login'>
            <div className='login_content'>
                <div className='login_body'>
                    <TwitterIcon 
                        sx={{ fontSize: 40 }}
                    />
                    <p>Inicia sesión en Twitter</p>
                    <form className='login_form' autoComplete="off" onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="username"
                            placeholder='Username'
                            value={form.username}
                            onChange={handleChange}
                        />
                        <input 
                            type="password"
                            name="password"
                            placeholder='Contraseña'
                            value={form.password}
                            onChange={handleChange}
                        />
                        <button type='submit'>Iniciar sesión</button>
                    </form>
                    <button className="login_changePassword">¿Olvidaste tu contraseña?</button>
                    <p className="login_register">¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;