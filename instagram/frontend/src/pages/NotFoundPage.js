import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='notfound'>
            <img 
                src="https://raw.githubusercontent.com/jonmolinna/React-Hooks/a6af902b7730434547c54292cdb5ae816100c13e/92.-react-clone/merng-tareas/client/public/img/404-not-found.svg" 
                alt="not found" 
            />
            <h2>¿Te has perdido?</h2>
            <p>Vuelve al <Link to='/'>inicio</Link></p>
        </div>
    )
}

export default NotFoundPage
