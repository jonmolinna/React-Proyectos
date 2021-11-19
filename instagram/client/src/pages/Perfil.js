import React from 'react';
import Header from '../componentes/Header';
import './Perfil.css';

const Perfil = () => {
    return (
        <>
            <Header />
            <div className="perfil container">
                <div className="perfil__header">
                    <img src="https://avatars.githubusercontent.com/u/54208914?v=4" alt="username" />
                    <div className="perfil__name">
                        <h2>UserName</h2>
                        <button>Seguir</button>
                    </div>
                </div>
                <div className="perfil__center">
                    <section className="perfil__post">
                        <span className="perfil__number">12</span>
                        <span>publicaciones</span>
                    </section>
                    <section className="perfil__post">
                        <span className="perfil__number">120</span>
                        <span>seguidores</span>
                    </section>
                    <section className="perfil__post">
                        <span className="perfil__number">112</span>
                        <span>seguidos</span>
                    </section>
                </div>
                <div className="perfil__photos">

                </div>
            </div>
        </>
    )
}

export default Perfil;