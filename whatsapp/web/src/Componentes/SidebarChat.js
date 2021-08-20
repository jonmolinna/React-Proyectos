import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const SidebarChat = ({ grupo, mensage }) => {
    mensage.sort((a, b) => Number(b.timestamp) - Number(a.timestamp) );
    //console.log(mensage);
    let ultimoMessage = mensage.filter(element => element.idGrupo === grupo._id)[0]
    
    return (
        <Link to={`/grupo/${grupo._id}`}>
            <div className="sidebarChat">
                <Avatar src={grupo.imagen} />
                <div className="sidebarChat__info">
                    <h2>{grupo.name}</h2>
                    <p>{ultimoMessage.message}</p>
                </div>
            </div>
        </Link>
    )
}

export default SidebarChat;