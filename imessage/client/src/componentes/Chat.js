import React, { useEffect, useState } from 'react';
import './Chat.css';
import { IconButton } from '@mui/material';
import MicNoneIcon from '@mui/icons-material/MicNone';
import Message from './Message';

import { useAuthState } from '../context/auth';
import axios from '../util/axios';
import Capitalize from '../util/capitalize';

const Chat = () => {
    const { chatUser } = useAuthState();
    const [messages, setMessages] = useState([]);
    const token = localStorage.getItem('tokenImessage');

    const getMessages = async (chatUser) => {
        if(!chatUser) return null;

        try {
            let options = {
                headers: {
                    'Authorization': `Bearer ${token? token : null}`
                }
            }
            const data = await axios.get(`/getMessages?from=${chatUser.username}`, options);
            setMessages(data.data.messages);
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getMessages(chatUser);

    }, [chatUser]);

    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To: <span className="chat__name">name</span></h4>
                <strong>Details</strong>
            </div>

            <div className="chat__messages">
                {
                    messages.length > 0 ? (
                        messages.map( message => <Message messages={message} key={message._id} />)
                     ) : (<p>Hola</p>)
                }
            </div>

            <div className="chat__input">
                <form>
                    <input type="text" placeholder="Mensaje" />
                    <button>Enviar Message</button>
                </form>
                <IconButton>
                    <MicNoneIcon className="chat__mic" />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;