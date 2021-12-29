import React, { useState } from 'react';
import './Register.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import axios from '../util/axios';

const initialForm = {
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
};

const Register = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState([]);
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
            let options = {
                method: "POST",
                headers: {
                    "Content-type" : "application/json; charset=utf-8"
                },
                data: JSON.stringify({
                    name: form.name,
                    username: form.username,
                    password: form.password,
                    confirmPassword: form.confirmPassword,
                })
            };
            const res = await axios('/user', options);
            toast.success(res.data.message);
            history.push('/login');
            setForm(initialForm);     
        } catch (e) {
            if(e.response.data.message) {
                toast.error(e.response.data.message);
            } else {
                setErrors(e.response.data)
            }
        }
    };

    console.log('REGISTER')
    return (
        <div className='register'>
            <div className='register_content'>
                <div className='register_body'>
                    <TwitterIcon 
                        sx={{ fontSize: 40 }}
                    />
                    <p>Únete a Twitter Clone hoy mismo.</p>
                    <form className='register_form' autoComplete="off" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Nombres'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder='Username'
                            name='username'
                            value={form.username}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder='Contraseña'
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder='Confirma Contreseña'
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                        />
                        <button>Registrate</button>
                    </form>
                    <p className="register_login">¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
                    {
                        errors.length > 0 && (
                            <ul className='register_error'>
                                {
                                    errors.map(error => (
                                        Object.values(error).map(value => (
                                            <li key={value}>{value}</li>
                                        ))
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Register;