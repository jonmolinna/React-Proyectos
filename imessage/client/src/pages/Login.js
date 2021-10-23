import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import axios from '../util/axios';
import { useAuthDispatch } from '../context/auth';
import Capitalize from '../util/capitalize';

const initialForm = {
    username: "",
    password: "",
};

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
            const res = await axios.post('/login', form);

            dispatch({
                type: 'LOGIN',
                payload: res.data,
            })

            setForm(initialForm);
            let nombre = Capitalize(res.data.name);
            toast.success(`Bienvenido ${nombre}`);
            history.push('/home')
        } catch (err) {
            if(err.response){
                toast.error(err.response.data.error);
            }
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <p>Imessage Clone</p>
            <form className="login__form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username"
                    placeholder="Ingrese Usuario"
                    onChange={handleChange}
                    value={form.username}
                />
                <input 
                    type="password"
                    name="password" 
                    placeholder="Ingrese Contraseña"
                    onChange={handleChange}
                    value={form.password}
                />
                <button type="submit">Iniciar sesión</button>
            </form>
            <p>¿No tienes una cuenta?</p>
            <Link to="/register">Regístrate</Link> 
        </div>
    )
}

export default Login
