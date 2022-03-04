import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);

        try {
            const res = await axios.post("http://localhost:9000/api/auth/register", {
                username, email, password
            });
            setUsername('');
            setEmail('');
            setPassword('');
            res.data && window.location.replace("/login")
            
        } catch (error) {
            setError(true);
            console.log(error.response);
        }
    };

    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className='registerForm' onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    className='registerInput'
                    type="text"
                    placeholder='Enter your username ...'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    className='registerInput'
                    type="email"
                    placeholder='Enter your email ...'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    className='registerInput'
                    type="password"
                    placeholder='Enter your password ...'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className='registerButton' type='submit'>Register</button>
            </form>
            <button className='registerLoginButton'>
                <Link className='link' to="/login">Login</Link>
            </button>
            {
                error && (
                    <span style={{color: "red", marginTop: "1rem"}}>Something went wrong!</span>
                )
            }
        </div>
    )
}

export default Register;