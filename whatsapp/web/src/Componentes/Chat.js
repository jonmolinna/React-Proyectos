import React, { useEffect, useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ChatMessage from './ChatMessage';
import axios from '../helpers/axios';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';
import Pusher from 'pusher-js';

// PUSHER
const pusher = new Pusher('33bd7f1aa81d481acfaf', {
    cluster: 'us2'
});

const Chat = ({ userName }) => {
    const [newMessage, setNewMessage] = useState('');
    const [group, setGroup] = useState({});
    const [messages, setMessages] = useState([]);
    const [time, setTime] = useState(null)
    const { id } = useParams();
    let history = useHistory();

    messages.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp));   

    const getMessages = (id) => {
        if(id){
            axios.get(`/getGroup?id=${id}`)
                .then(res => {
                    setGroup(res.data[0])
                    setMessages(res.data[0].conversation)
                    setTime(res.data[0].conversation[0].timestamp)
                });
        }
    };

    useEffect(() => {
        pusher.unsubscribe('messages');

        getMessages(id);

        const channel = pusher.subscribe('messages');
        channel.bind('newMessage', function(data){
            getMessages(id)
        });

    }, [id]);

    const addMensage = (e) => {
        e.preventDefault();

        axios.post(`/addMessage?id=${id}`, {
            message: newMessage,
            timestamp: Date.now(),
            user: userName
        });
        setNewMessage("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <ArrowBackIcon onClick={() => history.push("/")} />
                <Avatar src={group.imgUrl}  />
                <div className="chat__headerInfo">
                    <h3>{ group.chatName }</h3>
                    <small>Ult. Mensaje {moment(parseInt(time)).format('lll')} </small>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {
                    messages && messages.map(message => (
                        <ChatMessage key={message._id} message={message} userName={userName} />
                    ))
                }
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <form onSubmit={addMensage}>
                    <input 
                        type="text" 
                        placeholder="Escribe un mensage aquí"
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)} 
                    />
                    <button type="submit">Enviar</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;