import React from 'react';
import './Footer.css';
import { Button } from '@mui/material'

const Footer = () => {
    return (
        <div className="footer">
            <dir className="container">
            <form className="footer__form">
                <input 
                    type="text"
                    name="comment"
                    placeholder="Ingrese un Comentario"   
                />
                <Button
                    variant="contained"
                    component="label"
                >
                Seleccione Imagen
                <input
                    type="file"
                    hidden
                />
                </Button>
                <button type="submit">Publicar</button>
            </form>
            </dir>
        </div>
    )
}

export default Footer;