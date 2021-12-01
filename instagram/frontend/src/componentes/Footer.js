import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <form className="footer__form">
                    <div className="footer__group">
                        <input 
                            type="text"
                            name="comment"
                            placeholder="Ingrese un Comentario"   
                        />
                        <input type="file"/>
                    </div>
                    <button type="submit">Publicar</button>
                </form>
            </div>
        </div>
    )
}

export default Footer;