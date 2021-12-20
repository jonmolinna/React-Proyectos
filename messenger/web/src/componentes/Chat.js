import React, { useEffect, useState } from 'react';
import './Chat.css';
import ChatMessage from './ChatMessage';
import Pusher from 'pusher-js';

import axios from '../helpers/axios';
import { useAuthState } from '../context/auth.js';

var pusher = new Pusher('67142f14d3c0d4f4ff22', {
    cluster: 'us2'
});

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const { username } = useAuthState();
    messages.sort((a, b) => Number(b.timestamp) - Number(a.timestamp) );

    const getMessages = async () => {
        await axios.get('api/message')
            .then(response => {
                setMessages(response.data)
            });
    };

    useEffect(() => {
        getMessages();
    }, []);

    useEffect(() => {
        const chanel = pusher.subscribe('messages');
        chanel.bind('newMessage', function(data){
            getMessages();
        })
    }, [username]);

    return (
        <div className="chat">
            {
                messages && messages.map(element => (
                    <ChatMessage 
                        key={element._id} 
                        message={element} 
                        username={username} 
                    />
                ))
            }
        </div>
    )
}

export default Chat;