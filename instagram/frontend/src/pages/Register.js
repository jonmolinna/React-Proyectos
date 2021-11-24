import React, { useState } from 'react';
import './Register.css';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import axios from '../util/axios'; 

const initialForm = {
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
};

const Register = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    let history = useHistory();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/addUser', form);
            setForm(initialForm);
            setErrors({});
            history.push("/login")
            toast.success('El usuario se registro con exito');
        } catch (error) {
            setErrors(error.response.data.error)
        }
    };

    return (
        <div className="register">
            <div className="register__top">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/196px-Instagram_logo.svg.png" 
                    alt="logo instagram" 
                />
                <h2>Regístrate para ver fotos de tus amigos.</h2>
                <form className="register__form" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="name" 
                        placeholder="Nombre Completo" 
                        onChange={handleChange}
                        value={form.name}
                    />
                    <input 
                        type="text" 
                        name="username"
                        placeholder="Nombre de Usuario"
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
                    <input 
                        type="password" 
                        name="confirmPassword"
                        placeholder="Repita la Contraseña"
                        onChange={handleChange}
                        value={form.confirmPassword}
                    />
                    <button type="submit">Regístrate</button>
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
            <div className="register__bottom">
                <p>¿Tienes una cuenta? <Link to="/login">Inicia Sesión</Link></p>
            </div>
        </div>
    )
}

export default Register;