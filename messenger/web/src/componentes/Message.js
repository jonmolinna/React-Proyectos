import React from 'react';
import Chat from './Chat';
import Footer from './Footer';
import Header from './Header';
import './Message.css';

const Message = () => {
    return (
        <div className="message">
            <aside className="message__header">
                <Header />
            </aside>
            <aside className="message__chat">
                <Chat />
            </aside>
            <aside className="message__footer">
                <Footer />
            </aside>
        </div>
    )
}

export default Message;