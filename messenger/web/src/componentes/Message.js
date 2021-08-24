import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import Footer from './Footer';
import Header from './Header';
import './Message.css';
import axios from '../helpers/axios';
import Pusher from 'pusher-js';

var pusher = new Pusher('67142f14d3c0d4f4ff22', {
    cluster: 'us2'
});

const Message = ({ username, handleLogout }) => {
    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        await axios.get('api/message')
            .then(response => {
                setMessages(response.data)
            });
    };

    useEffect(() => {
        getMessages();
    }, []);

    const addMessage = async (message) => {
        axios.post('/api/message/add', message);
    }

    useEffect(() => {
        const chanel = pusher.subscribe('messages');
        chanel.bind('newMessage', function(data){
            getMessages();
        })
    }, [username]);
    
    return (
        <div className="message">
            <aside className="message__header">
                <Header 
                    handleLogout={handleLogout} 
                />
            </aside>
            <aside className="message__chat">
                <Chat 
                    messages={messages}
                    username={username}
                />
            </aside>
            <aside className="message__footer">
                <Footer 
                    username={username}
                    addMessage={addMessage}
                />
            </aside>
        </div>
    )
}

export default Message;