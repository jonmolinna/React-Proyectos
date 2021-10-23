import React, { useState } from 'react';
import './Register.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import axios from '../util/axios';

const initialForm = {
    name: "",
    username: "",
    password: "",
    imgURL: "https://res.cloudinary.com/dhdxq3mkm/image/upload/v1634935155/whatsapp-project/user_vnf0yr.jpg",
    confirmPassword: "",
}

const Register = () => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit =  async (e) => {
        e.preventDefault();

        try {
            await axios.post('/addUser', form)
            setForm(initialForm);
            toast.success('El usuario se registro correctamente')
        } catch (err) {
            if(err.response){
                toast.error(err.response.data.error);
            }
        }
    };

    return (
        <div className="register">
            <h2>Regístrate</h2>
            <p>Imessage Clone</p>
            <form className="register__form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Ingrese Nombres"
                    onChange={handleChange}
                    value={form.name} 
                />
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
                <input 
                    type="password"
                    name="confirmPassword" 
                    placeholder="Confirme Contraseña"
                    onChange={handleChange}
                    value={form.confirmPassword} 
                />
                <button type="submit">Registrarse</button>
            </form>
            <p>¿Tienes una Cuenta?</p>
            <Link to="/">Inicia sesión</Link>         
        </div>
    )
}

export default Register;