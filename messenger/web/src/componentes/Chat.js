import React from 'react';
import './Chat.css';
import ChatMessage from './ChatMessage';

const Chat = ({ messages, username }) => {
    messages.sort((a, b) => Number(b.timestamp) - Number(a.timestamp) );

    return (
            <div className="chat">
                {
                    messages.map(element => (
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