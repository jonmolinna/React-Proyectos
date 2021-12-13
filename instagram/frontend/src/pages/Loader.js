import React, { useState } from 'react';
import './Loader.css';
import { toast } from 'react-toastify';

import axios from '../util/axios';
import Loading from '../componentes/Loading';

const Loader = () => {
    const [image, setImage] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('tokenInstagram');

    // Cargando Imagen
    const upload = (e) => {
        let file = e.target.files[0];
        setImage(file);
    };

    // Enviando Imagen
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let formData = new FormData();
            formData.append("image", image);
            formData.append('comment', comment);

            let options = {
                headers: {
                    'Authorization': `Bearer ${token? token : null}`
                }
            }

            let data = await axios.post('/post', formData, options);
            console.log(data);
            setImage('');
            setComment('');
            
        } catch (error) {
            // console.log(error.response)
            // console.log('>>>>', error.response.data.message)
            return toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="loader">
            <div className="loader__card">
                <form className="loader__form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Comentario"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <input 
                        type="file"
                        onChange={upload}
                    />
                    <button type="submit">
                        Enviar
                    </button>
                </form>
                {
                    loading && <Loading />
                }
            </div>
        </div>
    )
}

export default Loader;