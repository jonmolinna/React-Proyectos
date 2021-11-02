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
    const [newMessage, setNewMessage] = useState('');
    const token = localStorage.getItem('tokenImessage');

    useEffect(() => {
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
        };

        getMessages(chatUser);

    }, [chatUser, token]);

    const addMessage = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: { Authorization: `Bearer ${token? token : null}` }
            };

            const body = {
                to: chatUser.username,
                    message: newMessage
            };

            await axios.post('/addMessage', body, config);
            setNewMessage('');
        } catch (error) {
            console.log(error.response)
        }
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To: 
                    <span className="chat__name">
                        { chatUser && `${Capitalize(chatUser.name)}`}
                    </span>
                </h4>
                <strong>Details</strong>
            </div>

            <div className="chat__messages">
                {
                    messages.length > 0 ? (
                        messages.map( message => <Message messages={message} key={message._id} />)
                     ) : 
                     (
                     <p className="chat__present">
                         {
                            chatUser && <span>{`${Capitalize(chatUser.name)} se unió a Imessage clone`}</span>
                         }
                    </p>
                    )
                }
            </div>

            <div className="chat__input">
                <form onSubmit={addMessage}>
                    <input 
                        type="text" 
                        placeholder="Escribe un mensaje"
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)} 
                    />
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