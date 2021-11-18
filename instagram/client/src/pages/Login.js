import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

import axios from '../util/axios';
import { useAuthDispatch } from '../context/auth';

const initialForm = {
    username: "",
    password: "",
};

const Login = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
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
            setErrors({});
        } catch (error) {
            setErrors(error.response.data.error)
        }
    };

    return (
        <div className="login">
           <div className="login__header">
               <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/196px-Instagram_logo.svg.png"
                alt="logo" 
              />
              <form className="login__form" onSubmit={handleSubmit}>
                  <input 
                    type="text"
                    name="username" 
                    placeholder="Usuario" 
                    onChange={handleChange}
                    value={form.username}
                  />
                  <input 
                    type="password"
                    name="password" 
                    placeholder="Contraseña"
                    onChange={handleChange}
                    value={form.password}
                  />
                  <button>Iniciar sesión</button>
              </form>
           </div>
           {
                Object.keys(errors).length > 0 && (
                    <div className="error">
                        <ul>
                            {
                                Object.values(errors).map(value => (
                                    <li key={value}>{value}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
           <div className="login__bottom">
               <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
           </div>
        </div>
    )
}

export default Login;